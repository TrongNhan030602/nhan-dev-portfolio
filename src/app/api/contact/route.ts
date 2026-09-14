import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_REQUEST_BYTES = 12_000;
const MIN_SUBMISSION_TIME_MS = 1_200;
const MAX_SUBMISSION_AGE_MS = 2 * 60 * 60 * 1_000;

const DEFAULT_SMTP_HOST = "smtp.hostinger.com";
const DEFAULT_SMTP_PORT = 465;
const DEFAULT_SMTP_SECURE = true;
const DEFAULT_SMTP_USER = "noreply@design24.edu.vn";
const DEFAULT_CONTACT_EMAIL = "ntnh030602@gmail.com";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
  startedAt: number;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value && typeof value === "object" && !Array.isArray(value));
}

function getEnvironmentValue(name: string, fallback?: string): string {
  const value = process.env[name]?.trim();

  if (value) {
    return value;
  }

  if (fallback) {
    return fallback;
  }

  throw new Error(`Missing environment variable: ${name}`);
}

function parseContactRequest(value: unknown): ContactRequest | null {
  if (!isRecord(value)) {
    return null;
  }

  const name = typeof value.name === "string" ? value.name.trim() : "";

  const email =
    typeof value.email === "string" ? value.email.trim().toLowerCase() : "";

  const subject = typeof value.subject === "string" ? value.subject.trim() : "";

  const message = typeof value.message === "string" ? value.message.trim() : "";

  const website = typeof value.website === "string" ? value.website.trim() : "";

  const startedAt = typeof value.startedAt === "number" ? value.startedAt : 0;

  if (
    name.length < 2 ||
    name.length > 80 ||
    !emailPattern.test(email) ||
    email.length > 254 ||
    subject.length < 3 ||
    subject.length > 120 ||
    message.length < 10 ||
    message.length > 2_000 ||
    !Number.isSafeInteger(startedAt) ||
    startedAt <= 0
  ) {
    return null;
  }

  return {
    name,
    email,
    subject,
    message,
    website,
    startedAt,
  };
}

function sanitizeHeaderText(value: string): string {
  return value
    .replace(/[\r\n]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function escapeHtml(value: string): string {
  const entities: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };

  return value.replace(
    /[&<>"']/g,
    (character) => entities[character] ?? character,
  );
}

function getRequestErrorMessage(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }

  return "Unknown mail delivery error";
}

export async function POST(request: Request): Promise<NextResponse> {
  const contentType = (request.headers.get("content-type") ?? "").toLowerCase();

  if (!contentType.includes("application/json")) {
    return NextResponse.json(
      {
        message: "Content-Type must be application/json",
      },
      { status: 415 },
    );
  }

  if (request.headers.get("sec-fetch-site") === "cross-site") {
    return NextResponse.json({ message: "Request rejected" }, { status: 403 });
  }

  let rawBody: string;

  try {
    rawBody = await request.text();
  } catch {
    return NextResponse.json(
      { message: "Unable to read request body" },
      { status: 400 },
    );
  }

  const requestSize = new TextEncoder().encode(rawBody).byteLength;

  if (requestSize > MAX_REQUEST_BYTES) {
    return NextResponse.json({ message: "Payload too large" }, { status: 413 });
  }

  let requestBody: unknown;

  try {
    requestBody = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ message: "Invalid JSON body" }, { status: 400 });
  }

  const contactRequest = parseContactRequest(requestBody);

  if (!contactRequest) {
    return NextResponse.json(
      { message: "Invalid contact data" },
      { status: 422 },
    );
  }

  // Honeypot chống bot.
  // Bot điền field này sẽ nhận phản hồi thành công giả.
  if (contactRequest.website) {
    return NextResponse.json({ message: "Message accepted" }, { status: 200 });
  }

  const submissionAge = Date.now() - contactRequest.startedAt;

  if (
    submissionAge < MIN_SUBMISSION_TIME_MS ||
    submissionAge > MAX_SUBMISSION_AGE_MS
  ) {
    return NextResponse.json({ message: "Request rejected" }, { status: 429 });
  }

  try {
    const smtpHost = getEnvironmentValue("SMTP_HOST", DEFAULT_SMTP_HOST);

    const smtpPort = Number(
      getEnvironmentValue("SMTP_PORT", String(DEFAULT_SMTP_PORT)),
    );

    const smtpSecure =
      getEnvironmentValue(
        "SMTP_SECURE",
        String(DEFAULT_SMTP_SECURE),
      ).toLowerCase() === "true";

    const smtpUser = getEnvironmentValue("SMTP_USER", DEFAULT_SMTP_USER);

    const smtpPassword = getEnvironmentValue("SMTP_PASSWORD");

    const contactEmail = getEnvironmentValue(
      "CONTACT_TO_EMAIL",
      DEFAULT_CONTACT_EMAIL,
    );

    if (!Number.isInteger(smtpPort) || smtpPort <= 0 || smtpPort > 65_535) {
      throw new Error("Invalid SMTP_PORT");
    }

    if (!emailPattern.test(smtpUser)) {
      throw new Error("Invalid SMTP_USER");
    }

    if (!emailPattern.test(contactEmail)) {
      throw new Error("Invalid CONTACT_TO_EMAIL");
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
      connectionTimeout: 8_000,
      greetingTimeout: 8_000,
      socketTimeout: 10_000,
    });

    const safeName = escapeHtml(contactRequest.name);
    const safeEmail = escapeHtml(contactRequest.email);
    const safeSubject = escapeHtml(sanitizeHeaderText(contactRequest.subject));
    const safeMessage = escapeHtml(contactRequest.message).replace(
      /\n/g,
      "<br />",
    );

    const mailSubject = sanitizeHeaderText(
      `[Portfolio] ${contactRequest.subject}`,
    );

    await transporter.sendMail({
      from: `"Design24 Portfolio" <${smtpUser}>`,
      to: contactEmail,
      replyTo: contactRequest.email,
      subject: mailSubject,
      text: [
        `Họ và tên: ${contactRequest.name}`,
        `Email: ${contactRequest.email}`,
        `Chủ đề: ${contactRequest.subject}`,
        "",
        contactRequest.message,
      ].join("\n"),
      html: `
        <!doctype html>
        <html lang="vi">
          <head>
            <meta charset="utf-8" />
            <title>${safeSubject}</title>
          </head>
          <body
            style="
              margin: 0;
              padding: 24px;
              background: #f4f6fb;
              color: #11131a;
              font-family: Arial, sans-serif;
              line-height: 1.6;
            "
          >
            <div
              style="
                max-width: 680px;
                margin: 0 auto;
                padding: 28px;
                border: 1px solid #e2e8f0;
                border-radius: 16px;
                background: #ffffff;
              "
            >
              <h2
                style="
                  margin: 0 0 24px;
                  color: #11131a;
                "
              >
                Thông tin liên hệ mới từ Portfolio
              </h2>

              <p>
                <strong>Họ và tên:</strong>
                ${safeName}
              </p>

              <p>
                <strong>Email:</strong>
                <a href="mailto:${safeEmail}">
                  ${safeEmail}
                </a>
              </p>

              <p>
                <strong>Chủ đề:</strong>
                ${safeSubject}
              </p>

              <div
                style="
                  margin-top: 20px;
                  padding: 16px;
                  border-radius: 10px;
                  background: #f8fafc;
                "
              >
                <strong>Nội dung:</strong>
                <p>${safeMessage}</p>
              </div>

              <p
                style="
                  margin-top: 24px;
                  color: #64748b;
                  font-size: 13px;
                "
              >
                Email này được gửi từ biểu mẫu liên hệ trên portfolio.
              </p>
            </div>
          </body>
        </html>
      `,
    });

    return NextResponse.json({ message: "Message delivered" }, { status: 200 });
  } catch (error) {
    console.error("[contact] SMTP delivery failed", {
      message: getRequestErrorMessage(error),
    });

    return NextResponse.json(
      { message: "Delivery service unavailable" },
      { status: 502 },
    );
  }
}
