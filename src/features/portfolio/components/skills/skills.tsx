"use client";

import { motion } from "framer-motion";
import { Code2, DatabaseZap, ServerCog } from "lucide-react";

import { portfolioData } from "@/data/portfolioData";
import { usePortfolioPreferences } from "@/providers/portfolio-preferences-provider";

import { SectionHeading } from "../ui/section-heading";

const skillIcons = {
  frontend: Code2,
  backend: ServerCog,
  devops: DatabaseZap,
} as const;

const skillAccents = {
  frontend: "text-accent-cyan border-accent-cyan/25 bg-accent-cyan/10",
  backend: "text-accent-violet border-accent-violet/25 bg-accent-violet/10",
  devops: "text-accent-emerald border-accent-emerald/25 bg-accent-emerald/10",
} as const;

export function Skills(): React.JSX.Element {
  const { translate } = usePortfolioPreferences();

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-line-strong to-transparent" />
      <div className="section-shell relative">
        <SectionHeading copy={portfolioData.skillsSection} align="center" />

        <div className="mt-14 grid gap-4 lg:grid-cols-12">
          {portfolioData.skills.map((group, index) => {
            const Icon = skillIcons[group.id];

            return (
              <motion.article
                key={group.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative overflow-hidden rounded-[1.75rem] border border-line bg-surface p-7 transition-[border-color,transform] duration-500 hover:-translate-y-1 hover:border-line-strong sm:p-8 ${index === 0 ? "lg:col-span-5" : index === 1 ? "lg:col-span-4" : "lg:col-span-3"}`}
              >
                <div
                  className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent-violet/[0.08] blur-3xl transition-opacity group-hover:opacity-100"
                  aria-hidden="true"
                />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-start justify-between gap-4">
                    <span
                      className={`grid h-12 w-12 place-items-center rounded-2xl border ${skillAccents[group.id]}`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <span className="font-mono text-xs text-muted/60">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="display-text mt-7 text-2xl font-semibold tracking-[-0.04em] text-ink">
                    {translate(group.category)}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-muted">
                    {translate(group.description)}
                  </p>

                  <ul className="mt-8 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-lg border border-line bg-soft/55 px-3 py-2 text-xs font-semibold text-muted-strong transition-colors group-hover:border-line-strong"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
