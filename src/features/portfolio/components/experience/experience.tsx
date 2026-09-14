"use client";

import { motion } from "framer-motion";
import { Building2, CalendarDays, Check, TerminalSquare } from "lucide-react";

import { portfolioData } from "@/data/portfolioData";
import { usePortfolioPreferences } from "@/providers/portfolio-preferences-provider";

import { SectionHeading } from "../ui/section-heading";

export function Experience(): React.JSX.Element {
  const { locale, translate } = usePortfolioPreferences();

  return (
    <section id="experience" className="relative py-24 sm:py-32">
      <div className="premium-grid pointer-events-none absolute inset-0 opacity-25" />
      <div className="section-shell relative">
        <SectionHeading copy={portfolioData.experienceSection} />

        <div className="relative mt-16 pl-5 sm:pl-9">
          <div
            className="absolute bottom-0 left-[0.32rem] top-0 w-px bg-gradient-to-b from-accent-cyan via-accent-violet to-transparent sm:left-[0.57rem]"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {portfolioData.experiences.map((experience, experienceIndex) => (
              <motion.article
                key={experience.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: experienceIndex * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative"
              >
                <span
                  className="absolute -left-[1.05rem] top-9 h-3 w-3 rounded-full border-2 border-canvas bg-accent-cyan shadow-[0_0_24px_var(--cyan)] sm:-left-[2.1rem] sm:h-5 sm:w-5 sm:border-[6px]"
                  aria-hidden="true"
                />

                <div className="glass-panel overflow-hidden rounded-[1.75rem]">
                  <div className="grid lg:grid-cols-[0.72fr_1.28fr]">
                    <div className="border-b border-line p-7 sm:p-9 lg:border-b-0 lg:border-r">
                      <span className="inline-flex items-center gap-2 rounded-full border border-accent-cyan/25 bg-accent-cyan/10 px-3 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.15em] text-accent-cyan">
                        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent-cyan" />
                        {translate(portfolioData.experienceSection.currentRole)}
                      </span>

                      <h3 className="display-text mt-7 text-3xl font-semibold tracking-[-0.045em] text-ink sm:text-4xl">
                        {translate(experience.role)}
                      </h3>
                      <div className="mt-4 flex items-start gap-3 text-sm font-semibold leading-6 text-muted-strong">
                        <Building2 className="mt-1 h-4 w-4 shrink-0 text-accent-violet" aria-hidden="true" />
                        {experience.company}
                      </div>
                      <div className="mt-8 inline-flex items-center gap-2 rounded-xl border border-line bg-soft/70 px-3.5 py-2.5 font-mono text-xs text-muted">
                        <CalendarDays className="h-4 w-4 text-accent-emerald" aria-hidden="true" />
                        {experience.startDate} — {translate(experience.endDate)}
                      </div>
                    </div>

                    <div className="p-7 sm:p-9">
                      <div className="flex items-center gap-3">
                        <TerminalSquare className="h-5 w-5 text-accent-cyan" aria-hidden="true" />
                        <h4 className="font-mono text-xs font-bold uppercase tracking-[0.17em] text-muted-strong">
                          {translate(portfolioData.experienceSection.responsibilities)}
                        </h4>
                      </div>

                      <ul className="mt-7 space-y-5">
                        {experience.description[locale].map((item) => (
                          <li key={item} className="grid grid-cols-[1.6rem_1fr] gap-3">
                            <span className="mt-0.5 grid h-6 w-6 place-items-center rounded-full border border-accent-emerald/25 bg-accent-emerald/10 text-accent-emerald">
                              <Check className="h-3.5 w-3.5" aria-hidden="true" />
                            </span>
                            <span className="text-sm leading-6 text-muted sm:text-[0.95rem] sm:leading-7">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-8 border-t border-line pt-6">
                        <h4 className="font-mono text-[0.68rem] font-bold uppercase tracking-[0.17em] text-muted">
                          {translate(portfolioData.experienceSection.coreStack)}
                        </h4>
                        <ul className="mt-4 flex flex-wrap gap-2">
                          {experience.techStack.map((technology) => (
                            <li
                              key={`${experience.id}-${technology}`}
                              className="rounded-lg border border-line bg-soft/60 px-3 py-1.5 font-mono text-[0.68rem] text-muted-strong"
                            >
                              {technology}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
