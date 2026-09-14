"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Languages,
  Menu,
  MessageCircle,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

import { portfolioData } from "@/data/portfolioData";
import { cn } from "@/lib/utils";
import { usePortfolioPreferences } from "@/providers/portfolio-preferences-provider";

import { GitHubIcon, LinkedInIcon } from "../ui/brand-icons";

export function Navbar(): React.JSX.Element {
  const { locale, theme, translate, toggleLocale, toggleTheme } =
    usePortfolioPreferences();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateScrollState = (): void => {
      setIsScrolled(window.scrollY > 24);
      ticking = false;
    };

    const handleScroll = (): void => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    updateScrollState();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = (): void => setIsMenuOpen(false);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,padding] duration-300",
        isScrolled
          ? "border-line bg-canvas/80 py-3 backdrop-blur-2xl"
          : "border-transparent bg-transparent py-5",
      )}
    >
      <div className="section-shell flex items-center justify-between gap-5">
        <a
          href="#home"
          onClick={closeMenu}
          className="group relative z-[60] inline-flex items-center gap-3"
          aria-label={portfolioData.personalInfo.name}
        >
          <span className="display-text grid h-10 w-10 place-items-center border border-line-strong bg-surface text-sm font-bold tracking-[-0.05em] text-ink shadow-premium transition-colors group-hover:border-accent-cyan/60">
            {portfolioData.personalInfo.initials}
          </span>
          <span className="hidden text-sm font-semibold tracking-[-0.02em] text-ink sm:block">
            {portfolioData.personalInfo.shortName}
            <span className="text-accent-cyan">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-line bg-surface/55 p-1.5 backdrop-blur-xl lg:flex">
          {portfolioData.navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:bg-soft hover:text-ink"
            >
              {translate(item.label)}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={portfolioData.personalInfo.github}
            target="_blank"
            rel="noreferrer"
            className="grid h-10 w-10 place-items-center rounded-full text-muted transition-colors hover:bg-soft hover:text-ink"
            aria-label={`GitHub — ${translate(portfolioData.common.opensNewTab)}`}
          >
            <GitHubIcon className="h-4 w-4" />
          </a>
          <a
            href={portfolioData.personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
            className="grid h-10 w-10 place-items-center rounded-full text-muted transition-colors hover:bg-soft hover:text-ink"
            aria-label={`LinkedIn — ${translate(portfolioData.common.opensNewTab)}`}
          >
            <LinkedInIcon className="h-4 w-4" />
          </a>
          <button
            type="button"
            onClick={toggleLocale}
            className="inline-flex h-10 items-center gap-2 rounded-full px-3 text-xs font-bold text-muted transition-colors hover:bg-soft hover:text-ink"
            aria-label={translate(portfolioData.common.switchLanguage)}
          >
            <Languages className="h-4 w-4" aria-hidden="true" />
            {locale === "en" ? "VI" : "EN"}
          </button>
          <button
            type="button"
            onClick={toggleTheme}
            className="grid h-10 w-10 place-items-center rounded-full text-muted transition-colors hover:bg-soft hover:text-ink"
            aria-label={
              theme === "dark"
                ? translate(portfolioData.common.switchToLight)
                : translate(portfolioData.common.switchToDark)
            }
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
          <a
            href={portfolioData.personalInfo.zalo}
            target="_blank"
            rel="noreferrer"
            className="ml-1 inline-flex h-10 items-center gap-2 rounded-full bg-ink px-4 text-sm font-bold text-canvas transition-transform hover:-translate-y-0.5"
          >
            <MessageCircle className="h-4 w-4" aria-hidden="true" />
            {translate(portfolioData.footer.cta)}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="relative z-[60] grid h-11 w-11 place-items-center rounded-full border border-line bg-surface text-ink lg:hidden"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={
            translate(
              isMenuOpen
                ? portfolioData.common.closeMenu
                : portfolioData.common.openMenu,
            )
          }
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-canvas/96 px-5 pb-8 pt-28 backdrop-blur-2xl lg:hidden"
          >
            <nav className="mx-auto flex h-full max-w-lg flex-col">
              <div className="flex flex-col border-t border-line">
                {portfolioData.navigation.map((item, index) => (
                  <motion.a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={closeMenu}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.045 }}
                    className="display-text border-b border-line py-4 text-3xl font-semibold tracking-[-0.04em] text-ink"
                  >
                    <span className="mr-4 font-mono text-xs text-accent-cyan">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {translate(item.label)}
                  </motion.a>
                ))}
              </div>

              <div className="mt-auto grid grid-cols-2 gap-3 pt-8">
                <button
                  type="button"
                  onClick={toggleLocale}
                  className="inline-flex h-12 items-center justify-center gap-2 border border-line bg-surface text-sm font-semibold text-ink"
                >
                  <Languages className="h-4 w-4" aria-hidden="true" />
                  {locale === "en" ? "VI" : "EN"}
                </button>
                <button
                  type="button"
                  onClick={toggleTheme}
                  className="inline-flex h-12 items-center justify-center gap-2 border border-line bg-surface text-sm font-semibold text-ink"
                >
                  {theme === "dark" ? (
                    <Sun className="h-4 w-4" aria-hidden="true" />
                  ) : (
                    <Moon className="h-4 w-4" aria-hidden="true" />
                  )}
            {translate(
              theme === "dark"
                ? portfolioData.common.lightTheme
                : portfolioData.common.darkTheme,
            )}
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
