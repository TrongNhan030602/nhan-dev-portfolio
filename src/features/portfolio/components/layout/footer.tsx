"use client";

import {
  ArrowUp,
  ArrowUpRight,
  Mail,
  MapPin,
  MessageCircle,
} from "lucide-react";

import { portfolioData } from "@/data/portfolioData";
import { usePortfolioPreferences } from "@/providers/portfolio-preferences-provider";

import { GitHubIcon, LinkedInIcon } from "../ui/brand-icons";

export function Footer(): React.JSX.Element {
  const { translate } = usePortfolioPreferences();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-line bg-surface/45 pb-8 pt-20 sm:pt-24">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-accent-violet/10 blur-[100px]"
        aria-hidden="true"
      />
      <div className="section-shell relative">
        <div className="grid gap-10 border-b border-line pb-16 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <div className="display-text gradient-text text-5xl font-semibold tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              {portfolioData.personalInfo.initials}.
            </div>
            <h2 className="display-text text-balance mt-7 max-w-3xl text-3xl font-semibold leading-[1.08] tracking-[-0.045em] text-ink sm:text-5xl">
              {translate(portfolioData.footer.headline)}
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted">
              {translate(portfolioData.footer.description)}
            </p>
          </div>
          <div className="lg:justify-self-end">
            <a
              href={portfolioData.personalInfo.zalo}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex min-h-13 items-center justify-center gap-3 bg-ink px-6 py-3.5 text-sm font-bold text-canvas transition-transform hover:-translate-y-1"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              {translate(portfolioData.footer.cta)}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="grid gap-10 py-12 md:grid-cols-3">
          <div>
            <div className="text-sm font-bold text-ink">{portfolioData.personalInfo.name}</div>
            <div className="mt-2 text-sm text-muted">
              {translate(portfolioData.personalInfo.role)}
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted">
              <MapPin className="h-4 w-4 text-accent-emerald" aria-hidden="true" />
              {translate(portfolioData.personalInfo.location)}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-muted">
              {translate(portfolioData.footer.navigationTitle)}
            </h3>
            <nav className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
              {portfolioData.navigation.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-sm font-medium text-muted transition-colors hover:text-ink"
                >
                  {translate(item.label)}
                </a>
              ))}
            </nav>
          </div>

          <div className="md:justify-self-end">
            <h3 className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-muted">
              {translate(portfolioData.footer.connectTitle)}
            </h3>
            <div className="mt-5 flex flex-wrap gap-2">
              {[
                { label: "GitHub", href: portfolioData.personalInfo.github, icon: GitHubIcon },
                { label: "LinkedIn", href: portfolioData.personalInfo.linkedin, icon: LinkedInIcon },
                { label: "Email", href: `mailto:${portfolioData.personalInfo.email}`, icon: Mail },
              ].map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={label === "Email" ? undefined : "_blank"}
                  rel={label === "Email" ? undefined : "noreferrer"}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-line-strong hover:bg-soft hover:text-ink"
                >
                  <Icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-line pt-7 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © <span suppressHydrationWarning>{currentYear}</span>{" "}
            {portfolioData.personalInfo.name}. {translate(portfolioData.footer.copyright)}
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-mono">{translate(portfolioData.footer.builtWith)}</span>
            <a
              href="#home"
              className="inline-flex items-center gap-2 font-semibold text-muted-strong transition-colors hover:text-accent-cyan"
            >
              {translate(portfolioData.common.backToTop)}
              <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
