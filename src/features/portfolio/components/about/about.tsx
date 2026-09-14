"use client";

import { motion } from "framer-motion";
import { Braces, MapPin, ServerCog, Target } from "lucide-react";

import { portfolioData } from "@/data/portfolioData";
import { usePortfolioPreferences } from "@/providers/portfolio-preferences-provider";

import { SectionHeading } from "../ui/section-heading";

const approachIcons = [Target, Braces, ServerCog] as const;

export function About(): React.JSX.Element {
  const { translate } = usePortfolioPreferences();

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading copy={portfolioData.about} />

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-12">
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="glass-panel relative overflow-hidden rounded-[1.75rem] p-7 md:p-9 lg:col-span-7 lg:row-span-2"
          >
            <div
              className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent-violet/10 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-cyan">
                {portfolioData.personalInfo.initials}.profile
              </span>
              <p className="display-text mt-8 max-w-2xl text-2xl font-medium leading-[1.35] tracking-[-0.035em] text-ink sm:text-3xl">
                {translate(portfolioData.about.careerSummary)}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-line pt-6">
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-muted-strong">
                  <MapPin className="h-4 w-4 text-accent-emerald" aria-hidden="true" />
                  {translate(portfolioData.about.locationLabel)}
                </span>
                <span className="rounded-full border border-line bg-soft/60 px-3 py-1.5 text-sm font-semibold text-ink">
                  {translate(portfolioData.personalInfo.location)}
                </span>
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-[1.75rem] border border-line bg-surface p-7 lg:col-span-5"
          >
            <h3 className="display-text text-xl font-semibold tracking-[-0.03em] text-ink">
              {translate(portfolioData.about.approachTitle)}
            </h3>
            <div className="mt-7 space-y-6">
              {portfolioData.about.approachItems.map((item, index) => {
                const Icon = approachIcons[index];

                return (
                  <div key={item.title.en} className="grid grid-cols-[2.5rem_1fr] gap-4">
                    <span className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-soft text-accent-cyan">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <div>
                      <h4 className="text-sm font-bold text-ink">{translate(item.title)}</h4>
                      <p className="mt-1 text-sm leading-6 text-muted">
                        {translate(item.description)}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.article>

          <div className="grid grid-cols-2 gap-4 lg:col-span-5">
            {portfolioData.stats.slice(0, 2).map((stat, index) => (
              <motion.article
                key={stat.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="rounded-[1.5rem] border border-line bg-surface p-5 sm:p-6"
              >
                <div className="display-text gradient-text text-4xl font-semibold tracking-[-0.06em] sm:text-5xl">
                  {stat.value}
                </div>
                <h3 className="mt-4 text-sm font-bold leading-5 text-ink">
                  {translate(stat.label)}
                </h3>
                <p className="mt-2 hidden text-xs leading-5 text-muted sm:block">
                  {translate(stat.detail)}
                </p>
              </motion.article>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4 lg:col-span-12">
            {portfolioData.stats.slice(2).map((stat, index) => (
              <motion.article
                key={stat.id}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="group rounded-[1.5rem] border border-line bg-surface p-5 transition-colors hover:border-accent-violet/40 sm:p-7 lg:grid lg:grid-cols-[auto_1fr] lg:items-center lg:gap-7"
              >
                <div className="display-text text-4xl font-semibold tracking-[-0.06em] text-ink sm:text-5xl">
                  {stat.value}
                </div>
                <div>
                  <h3 className="mt-4 text-sm font-bold text-ink lg:mt-0">
                    {translate(stat.label)}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-muted sm:text-sm">
                    {translate(stat.detail)}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
