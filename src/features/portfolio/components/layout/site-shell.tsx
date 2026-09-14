"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

import { portfolioData } from "@/data/portfolioData";
import { usePortfolioPreferences } from "@/providers/portfolio-preferences-provider";

import { CustomCursor } from "../ui/custom-cursor";
import { ScrollEffects } from "../ui/scroll-effects";
import { Footer } from "./footer";
import { Navbar } from "../navigation/navbar";

interface SiteShellProps {
  children: ReactNode;
}

export function SiteShell({ children }: SiteShellProps): React.JSX.Element {
  const { translate } = usePortfolioPreferences();

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main-content"
        className="fixed left-4 top-3 z-[90] -translate-y-24 bg-ink px-4 py-2 text-sm font-bold text-canvas transition-transform focus:translate-y-0"
      >
        {translate(portfolioData.common.skipToContent)}
      </a>
      <ScrollEffects />
      <CustomCursor />
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </MotionConfig>
  );
}
