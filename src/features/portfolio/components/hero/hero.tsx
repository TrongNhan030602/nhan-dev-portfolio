"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight,
  Download,
  MapPin,
  MessageCircle,
} from "lucide-react";
import { useEffect, useState } from "react";

import { portfolioData } from "@/data/portfolioData";
import { usePortfolioPreferences } from "@/providers/portfolio-preferences-provider";

import { MagneticLink } from "../ui/magnetic-link";
import { ParticleCanvas } from "../ui/particle-canvas";
import { GitHubIcon, LinkedInIcon } from "../ui/brand-icons";

const entranceTransition = {
  duration: 0.72,
  ease: [0.22, 1, 0.36, 1] as const,
};

export function Hero(): React.JSX.Element {
  const { locale, translate } = usePortfolioPreferences();
  const reduceMotion = useReducedMotion();
  const [roleIndex, setRoleIndex] = useState(0);
  const roles = portfolioData.hero.rotatingRoles[locale];

  useEffect(() => {
    if (reduceMotion) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setRoleIndex((currentIndex) => (currentIndex + 1) % roles.length);
    }, 2600);

    return () => window.clearInterval(intervalId);
  }, [reduceMotion, roles.length]);

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-32 sm:pt-36"
    >
      <ParticleCanvas />
      <div className="premium-grid pointer-events-none absolute inset-0 opacity-35" />
      <div
        data-parallax
        className="pointer-events-none absolute -right-40 top-10 h-[34rem] w-[34rem] rounded-full bg-accent-violet/15 blur-[110px]"
        aria-hidden="true"
      />
      <div
        data-parallax
        className="pointer-events-none absolute -left-44 bottom-0 h-[30rem] w-[30rem] rounded-full bg-accent-cyan/10 blur-[110px]"
        aria-hidden="true"
      />

      <div className="section-shell relative z-10 grid items-center gap-16 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={entranceTransition}
            className="mb-7 flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-emerald/25 bg-accent-emerald/10 px-3 py-1.5 text-xs font-semibold text-accent-emerald">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-emerald opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-emerald" />
              </span>
              {translate(portfolioData.hero.availability)}
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
              {translate(portfolioData.hero.eyebrow)}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...entranceTransition, delay: 0.08 }}
            className="display-text text-balance text-[clamp(3.3rem,8vw,7.5rem)] font-semibold leading-[0.91] tracking-[-0.065em] text-ink"
          >
            {translate(portfolioData.hero.headline)}{" "}
            <span className="gradient-text">
              {translate(portfolioData.hero.headlineAccent)}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...entranceTransition, delay: 0.16 }}
            className="mt-7 flex min-h-8 items-center gap-3 font-mono text-sm text-muted-strong sm:text-base"
          >
            <span className="text-accent-cyan">~/</span>
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={`${locale}-${roleIndex}`}
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                {roles[roleIndex]}
              </motion.span>
            </AnimatePresence>
            <span className="h-5 w-px animate-pulse bg-accent-cyan" aria-hidden="true" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...entranceTransition, delay: 0.22 }}
            className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8"
          >
            {translate(portfolioData.personalInfo.bio)}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...entranceTransition, delay: 0.3 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <MagneticLink
              href="#projects"
              className="group relative inline-flex min-h-13 items-center justify-center gap-3 overflow-hidden bg-ink px-6 py-3.5 text-sm font-bold text-canvas shadow-premium"
            >
              <span className="absolute inset-y-0 left-0 w-1/3 -translate-x-[160%] skew-x-[-18deg] bg-white/25 group-hover:animate-shimmer" />
              <span className="relative">{translate(portfolioData.hero.primaryCta)}</span>
              <ArrowDownRight
                className="relative h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                aria-hidden="true"
              />
            </MagneticLink>
            <MagneticLink
              href={portfolioData.personalInfo.resumeUrl}
              download="CV_Nguyen_Trong_Nhan_Fullstack-en.pdf"
              className="inline-flex min-h-13 items-center justify-center gap-3 border border-line-strong bg-surface/70 px-6 py-3.5 text-sm font-bold text-ink hover:border-accent-cyan/50 hover:bg-soft"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              {translate(portfolioData.hero.secondaryCta)}
            </MagneticLink>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="mt-9 flex flex-wrap items-center gap-2"
          >
            {[
              { label: "GitHub", href: portfolioData.personalInfo.github, icon: GitHubIcon },
              { label: "LinkedIn", href: portfolioData.personalInfo.linkedin, icon: LinkedInIcon },
              { label: "Zalo", href: portfolioData.personalInfo.zalo, icon: MessageCircle },
            ].map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center gap-2 rounded-full border border-line px-3.5 text-xs font-semibold text-muted transition-colors hover:border-line-strong hover:bg-surface hover:text-ink"
                aria-label={`${label} — ${translate(portfolioData.common.opensNewTab)}`}
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
                {label}
              </a>
            ))}
            <span className="ml-1 inline-flex items-center gap-2 text-xs font-medium text-muted">
              <MapPin className="h-4 w-4 text-accent-emerald" aria-hidden="true" />
              {translate(portfolioData.personalInfo.location)}
            </span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 28 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ ...entranceTransition, delay: 0.24 }}
          className="relative mx-auto w-full max-w-xl lg:mx-0 lg:ml-auto"
        >
          <div
            className="absolute -inset-8 rounded-full bg-gradient-to-br from-accent-cyan/18 via-accent-violet/12 to-transparent blur-3xl"
            aria-hidden="true"
          />
          <div className="glass-panel relative overflow-hidden rounded-[1.75rem]">
            <div className="flex h-12 items-center border-b border-line px-5">
              <div className="flex gap-2" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ff6259]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
              </div>
              <span className="mx-auto font-mono text-[0.7rem] text-muted">
                {portfolioData.hero.codeWindowTitle}
              </span>
              <span className="w-[42px]" aria-hidden="true" />
            </div>

            <div className="relative overflow-hidden p-5 sm:p-7">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/[0.04] via-transparent to-accent-violet/[0.06]" />
              <ol className="relative space-y-2.5 font-mono text-[0.72rem] leading-6 sm:text-sm">
                {portfolioData.hero.codeLines[locale].map((line, index) => (
                  <li key={line} className="grid grid-cols-[1.5rem_1fr] gap-3">
                    <span className="select-none text-right text-muted/45">
                      {index + 1}
                    </span>
                    <code className="whitespace-pre text-muted-strong">{line}</code>
                  </li>
                ))}
              </ol>

              <div className="mt-8 grid grid-cols-2 gap-3 border-t border-line pt-5">
                {portfolioData.stats.slice(0, 2).map((stat) => (
                  <div key={stat.id} className="border-l border-line-strong pl-4">
                    <div className="display-text text-3xl font-semibold tracking-[-0.05em] text-ink">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-xs leading-5 text-muted">
                      {translate(stat.label)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-3 hidden animate-float border border-line bg-elevated/90 px-4 py-3 shadow-premium backdrop-blur-xl sm:block">
            <span className="font-mono text-xs text-accent-emerald">
              {translate(portfolioData.personalInfo.role)}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
