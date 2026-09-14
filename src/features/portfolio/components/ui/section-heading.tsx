"use client";

import { motion } from "framer-motion";

import { usePortfolioPreferences } from "@/providers/portfolio-preferences-provider";
import type { SectionHeadingCopy } from "@/types/portfolio";

interface SectionHeadingProps {
  copy: SectionHeadingCopy;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  copy,
  align = "left",
  className = "",
}: SectionHeadingProps): React.JSX.Element {
  const { translate } = usePortfolioPreferences();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={`${align === "center" ? "mx-auto items-center text-center" : "items-start text-left"} flex max-w-3xl flex-col ${className}`}
    >
      <span className="mb-5 inline-flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan">
        <span className="h-px w-6 bg-accent-cyan" aria-hidden="true" />
        {translate(copy.eyebrow)}
      </span>
      <h2 className="display-text text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-ink sm:text-5xl lg:text-6xl">
        {translate(copy.title)}{" "}
        <span className="gradient-text">{translate(copy.accent)}</span>
      </h2>
      <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg sm:leading-8">
        {translate(copy.description)}
      </p>
    </motion.div>
  );
}
