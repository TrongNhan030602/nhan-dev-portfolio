import type { Metadata, Viewport } from "next";
import Script from "next/script";
import type { ReactNode } from "react";

import { portfolioData } from "@/data/portfolioData";
import { SiteShell } from "@/features/portfolio/components/layout/site-shell";
import { PortfolioPreferencesProvider } from "@/providers/portfolio-preferences-provider";

import "./globals.css";

export const metadata: Metadata = {
  title: `${portfolioData.personalInfo.name} | Fullstack Web Developer`,
  description: portfolioData.personalInfo.bio.en,
  applicationName: `${portfolioData.personalInfo.name} Portfolio`,
  authors: [{ name: portfolioData.personalInfo.name }],
  creator: portfolioData.personalInfo.name,
  keywords: [
    "Fullstack Web Developer",
    "Next.js Developer",
    "Laravel Developer",
    "React Developer",
    "Can Tho Developer",
    "Nguyen Trong Nhan",
  ],
  alternates: { canonical: "/" },
  icons: { icon: "/icon.svg" },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#08090d" },
    { media: "(prefers-color-scheme: light)", color: "#f4f6fb" },
  ],
};

const themeBootstrapScript = `
  try {
    const storedTheme = localStorage.getItem("ntn-portfolio-theme");
    document.documentElement.dataset.theme = storedTheme === "light" ? "light" : "dark";
  } catch {
    document.documentElement.dataset.theme = "dark";
  }
`;

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): React.JSX.Element {
  return (
    <html lang="en" data-theme="dark" suppressHydrationWarning>
      <body>
        <Script id="theme-bootstrap" strategy="beforeInteractive">
          {themeBootstrapScript}
        </Script>
        <PortfolioPreferencesProvider>
          <SiteShell>{children}</SiteShell>
        </PortfolioPreferencesProvider>
      </body>
    </html>
  );
}
