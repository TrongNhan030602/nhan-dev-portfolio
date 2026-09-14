"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  Clock3,
  Copy,
  LoaderCircle,
  Mail,
  MessageCircle,
  Send,
} from "lucide-react";
import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
} from "react";

import { portfolioData } from "@/data/portfolioData";
import { usePortfolioPreferences } from "@/providers/portfolio-preferences-provider";

import { SectionHeading } from "../ui/section-heading";

type ContactStatus =
  | "idle"
  | "submitting"
  | "success"
  | "error";

type ContactField =
  | "name"
  | "email"
  | "subject"
  | "message";

type ContactErrors = Partial<
  Record<ContactField, string>
>;

interface ContactPayload {
  name: string;
  email: string;
  subject: string;
  message: string;
  website: string;
  startedAt: number;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact(): React.JSX.Element {
  const { translate } = usePortfolioPreferences();

  const [status, setStatus] =
    useState<ContactStatus>("idle");

  const [errors, setErrors] =
    useState<ContactErrors>({});

  const [isCopied, setIsCopied] =
    useState(false);

  const startedAtRef = useRef(0);
  const copiedTimeoutRef =
    useRef<number | null>(null);

  useEffect(() => {
    startedAtRef.current = Date.now();

    return () => {
      if (copiedTimeoutRef.current !== null) {
        window.clearTimeout(
          copiedTimeoutRef.current,
        );
      }
    };
  }, []);

  function validate(
    payload: ContactPayload,
  ): ContactErrors {
    const nextErrors: ContactErrors = {};

    if (payload.name.length < 2) {
      nextErrors.name = translate(
        portfolioData.contact.validation.name,
      );
    }

    if (
      !emailPattern.test(payload.email) ||
      payload.email.length > 254
    ) {
      nextErrors.email = translate(
        portfolioData.contact.validation.email,
      );
    }

    if (payload.subject.length < 3) {
      nextErrors.subject = translate(
        portfolioData.contact.validation.subject,
      );
    }

    if (
      payload.message.length < 10 ||
      payload.message.length > 2_000
    ) {
      nextErrors.message = translate(
        portfolioData.contact.validation.message,
      );
    }

    return nextErrors;
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    if (status === "submitting") {
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload: ContactPayload = {
      name: String(formData.get("name") ?? "")
        .trim(),

      email: String(formData.get("email") ?? "")
        .trim()
        .toLowerCase(),

      subject: String(
        formData.get("subject") ?? "",
      ).trim(),

      message: String(
        formData.get("message") ?? "",
      ).trim(),

      website: String(
        formData.get("website") ?? "",
      ).trim(),

      startedAt: startedAtRef.current,
    };

    const nextErrors = validate(payload);

    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      const firstInvalidField =
        Object.keys(nextErrors)[0] as ContactField;

      const fieldElement =
        form.elements.namedItem(firstInvalidField);

      if (
        fieldElement instanceof HTMLInputElement ||
        fieldElement instanceof HTMLTextAreaElement
      ) {
        fieldElement.focus();
      }

      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const responseBody: unknown =
        await response.json().catch(() => null);

      if (!response.ok) {
        const message =
          typeof responseBody === "object" &&
            responseBody !== null &&
            "message" in responseBody &&
            typeof responseBody.message === "string"
            ? responseBody.message
            : "Contact request failed";

        throw new Error(message);
      }

      form.reset();
      setErrors({});
      startedAtRef.current = Date.now();
      setStatus("success");
    } catch (error) {
      console.error(
        "[contact] Submit failed",
        error,
      );

      setStatus("error");
    }
  }

  async function copyEmail(): Promise<void> {
    try {
      await navigator.clipboard.writeText(
        portfolioData.personalInfo.email,
      );
    } catch {
      const temporaryInput =
        document.createElement("textarea");

      temporaryInput.value =
        portfolioData.personalInfo.email;

      temporaryInput.style.position = "fixed";
      temporaryInput.style.opacity = "0";

      document.body.appendChild(temporaryInput);
      temporaryInput.select();
      document.execCommand("copy");
      temporaryInput.remove();
    }

    setIsCopied(true);

    if (copiedTimeoutRef.current !== null) {
      window.clearTimeout(
        copiedTimeoutRef.current,
      );
    }

    copiedTimeoutRef.current = window.setTimeout(
      () => setIsCopied(false),
      2_200,
    );
  }

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32"
    >
      <div
        data-parallax
        className="pointer-events-none absolute -left-60 top-10 h-[34rem] w-[34rem] rounded-full bg-accent-cyan/10 blur-[120px]"
        aria-hidden="true"
      />

      <div className="section-shell relative">
        <SectionHeading copy={portfolioData.contact} />

        <div className="mt-14 grid gap-5 lg:grid-cols-[0.78fr_1.22fr]">
          <div className="rounded-[1.75rem] border border-line bg-surface p-7 sm:p-9">
            <div className="flex items-center gap-2 font-mono text-xs text-accent-emerald">
              <Clock3
                className="h-4 w-4"
                aria-hidden="true"
              />

              {translate(
                portfolioData.contact.responseTime,
              )}
            </div>

            <h3 className="display-text mt-9 text-2xl font-semibold tracking-[-0.035em] text-ink">
              {translate(
                portfolioData.contact.directContact,
              )}
            </h3>

            <div className="mt-6 space-y-3">
              <div className="rounded-2xl border border-line bg-soft/45 p-4">
                <div className="flex items-start gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-cyan/10 text-accent-cyan">
                    <Mail
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-semibold text-muted">
                      {translate(
                        portfolioData.contact.emailLabel,
                      )}
                    </div>

                    <a
                      href={`mailto:${portfolioData.personalInfo.email}`}
                      className="mt-1 block truncate text-sm font-bold text-ink transition-colors hover:text-accent-cyan"
                    >
                      {portfolioData.personalInfo.email}
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={copyEmail}
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-muted transition-colors hover:bg-surface hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-cyan"
                    aria-label={translate(
                      portfolioData.common.copyEmail,
                    )}
                  >
                    {isCopied ? (
                      <Check
                        className="h-4 w-4 text-accent-emerald"
                        aria-hidden="true"
                      />
                    ) : (
                      <Copy
                        className="h-4 w-4"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                </div>
              </div>

              <a
                href={portfolioData.personalInfo.zalo}
                target="_blank"
                rel="noreferrer"
                className="group flex items-start gap-3 rounded-2xl border border-line bg-soft/45 p-4 transition-colors hover:border-accent-violet/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-violet"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent-violet/10 text-accent-violet">
                  <MessageCircle
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                </span>

                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-semibold text-muted">
                    {translate(
                      portfolioData.contact.zaloLabel,
                    )}
                  </span>

                  <span className="mt-1 block text-sm font-bold text-ink">
                    {portfolioData.personalInfo.phoneDisplay}
                  </span>
                </span>

                <ArrowUpRight
                  className="h-4 w-4 text-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </div>

            <div
              className="mt-7 min-h-6"
              aria-live="polite"
            >
              {isCopied ? (
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent-emerald">
                  <Check
                    className="h-4 w-4"
                    aria-hidden="true"
                  />

                  {translate(
                    portfolioData.common.copied,
                  )}
                </span>
              ) : null}
            </div>
          </div>

          <div className="glass-panel rounded-[1.75rem] p-6 sm:p-9">
            <h3 className="display-text text-2xl font-semibold tracking-[-0.035em] text-ink">
              {translate(
                portfolioData.contact.formTitle,
              )}
            </h3>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="mt-7 space-y-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  name="name"
                  type="text"
                  label={translate(
                    portfolioData.contact.fields.name
                      .label,
                  )}
                  placeholder={translate(
                    portfolioData.contact.fields.name
                      .placeholder,
                  )}
                  error={errors.name}
                  autoComplete="name"
                  maxLength={80}
                />

                <FormField
                  name="email"
                  type="email"
                  label={translate(
                    portfolioData.contact.fields.email
                      .label,
                  )}
                  placeholder={translate(
                    portfolioData.contact.fields.email
                      .placeholder,
                  )}
                  error={errors.email}
                  autoComplete="email"
                  maxLength={254}
                />
              </div>

              <FormField
                name="subject"
                type="text"
                label={translate(
                  portfolioData.contact.fields.subject
                    .label,
                )}
                placeholder={translate(
                  portfolioData.contact.fields.subject
                    .placeholder,
                )}
                error={errors.subject}
                autoComplete="off"
                maxLength={120}
              />

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-semibold text-muted-strong"
                >
                  {translate(
                    portfolioData.contact.fields.message
                      .label,
                  )}
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  maxLength={2_000}
                  placeholder={translate(
                    portfolioData.contact.fields.message
                      .placeholder,
                  )}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message
                      ? "message-error"
                      : undefined
                  }
                  className="mt-2 block w-full resize-y rounded-xl border border-line bg-canvas/60 px-4 py-3.5 text-base text-ink outline-none transition-[border-color,box-shadow] placeholder:text-muted/60 focus:border-accent-cyan/60 focus:ring-4 focus:ring-accent-cyan/10"
                />

                {errors.message ? (
                  <p
                    id="message-error"
                    className="mt-2 text-xs text-red-400"
                  >
                    {errors.message}
                  </p>
                ) : null}
              </div>

              <div
                className="absolute -left-[9999px] h-px w-px overflow-hidden opacity-0"
                aria-hidden="true"
              >
                <label htmlFor="website">
                  Website
                </label>

                <input
                  id="website"
                  name="website"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="group inline-flex min-h-13 w-full items-center justify-center gap-3 bg-ink px-6 py-3.5 text-sm font-bold text-canvas transition-[transform,opacity] hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-55 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-cyan sm:w-auto"
              >
                {status === "submitting" ? (
                  <LoaderCircle
                    className="h-4 w-4 animate-spin"
                    aria-hidden="true"
                  />
                ) : (
                  <Send
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                )}

                {translate(
                  status === "submitting"
                    ? portfolioData.contact.submitting
                    : portfolioData.contact.submit,
                )}
              </button>

              <div
                className="min-h-14"
                aria-live="polite"
              >
                <AnimatePresence mode="wait">
                  {status === "success" ? (
                    <motion.div
                      key="success"
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{ opacity: 0 }}
                      className="rounded-xl border border-accent-emerald/25 bg-accent-emerald/10 px-4 py-3 text-sm text-accent-emerald"
                    >
                      <strong>
                        {translate(
                          portfolioData.contact
                            .successTitle,
                        )}
                        .
                      </strong>{" "}
                      {translate(
                        portfolioData.contact
                          .successMessage,
                      )}
                    </motion.div>
                  ) : null}

                  {status === "error" ? (
                    <motion.div
                      key="error"
                      initial={{
                        opacity: 0,
                        y: 8,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      exit={{ opacity: 0 }}
                      className="rounded-xl border border-red-400/25 bg-red-400/10 px-4 py-3 text-sm text-red-400"
                    >
                      {translate(
                        portfolioData.contact
                          .errorMessage,
                      )}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FormFieldProps {
  name: Exclude<ContactField, "message">;
  type: "text" | "email";
  label: string;
  placeholder: string;
  error?: string;
  autoComplete: string;
  maxLength: number;
}

function FormField({
  name,
  type,
  label,
  placeholder,
  error,
  autoComplete,
  maxLength,
}: FormFieldProps): React.JSX.Element {
  const errorId = `${name}-error`;

  return (
    <div>
      <label
        htmlFor={name}
        className="text-sm font-semibold text-muted-strong"
      >
        {label}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required
        maxLength={maxLength}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={Boolean(error)}
        aria-describedby={
          error ? errorId : undefined
        }
        className="mt-2 block w-full rounded-xl border border-line bg-canvas/60 px-4 py-3.5 text-base text-ink outline-none transition-[border-color,box-shadow] placeholder:text-muted/60 focus:border-accent-cyan/60 focus:ring-4 focus:ring-accent-cyan/10"
      />

      {error ? (
        <p
          id={errorId}
          className="mt-2 text-xs text-red-400"
        >
          {error}
        </p>
      ) : null}
    </div>
  );
}