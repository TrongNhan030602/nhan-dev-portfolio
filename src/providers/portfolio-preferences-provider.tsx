"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

import type { Locale, LocalizedText, Theme } from "@/types/portfolio";

const LOCALE_STORAGE_KEY = "ntn-portfolio-locale";
const THEME_STORAGE_KEY = "ntn-portfolio-theme";
const PREFERENCES_EVENT = "ntn-portfolio-preferences-change";
let fallbackLocale: Locale = "en";
let fallbackTheme: Theme = "dark";

interface PortfolioPreferencesContextValue {
  locale: Locale;
  theme: Theme;
  translate: (text: LocalizedText) => string;
  toggleLocale: () => void;
  toggleTheme: () => void;
}

const PortfolioPreferencesContext =
  createContext<PortfolioPreferencesContextValue | null>(null);

interface PortfolioPreferencesProviderProps {
  children: ReactNode;
}

function isLocale(value: string | null): value is Locale {
  return value === "en" || value === "vi";
}

function isTheme(value: string | null): value is Theme {
  return value === "dark" || value === "light";
}

function subscribeToPreferences(callback: () => void): () => void {
  window.addEventListener("storage", callback);
  window.addEventListener(PREFERENCES_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(PREFERENCES_EVENT, callback);
  };
}

function getStoredLocale(): Locale {
  try {
    const storedLocale = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    return isLocale(storedLocale) ? storedLocale : "en";
  } catch {
    return fallbackLocale;
  }
}

function getStoredTheme(): Theme {
  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    return isTheme(storedTheme) ? storedTheme : "dark";
  } catch {
    return fallbackTheme;
  }
}

function getDefaultLocale(): Locale {
  return "en";
}

function getDefaultTheme(): Theme {
  return "dark";
}

export function PortfolioPreferencesProvider({
  children,
}: PortfolioPreferencesProviderProps): React.JSX.Element {
  const locale = useSyncExternalStore(
    subscribeToPreferences,
    getStoredLocale,
    getDefaultLocale,
  );
  const theme = useSyncExternalStore(
    subscribeToPreferences,
    getStoredTheme,
    getDefaultTheme,
  );

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleLocale = useCallback(() => {
    const nextLocale: Locale = locale === "en" ? "vi" : "en";
    fallbackLocale = nextLocale;

    try {
      window.localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);
    } catch {
      // The module fallback keeps the preference usable when storage is blocked.
    }

    document.documentElement.lang = nextLocale;
    window.dispatchEvent(new Event(PREFERENCES_EVENT));
  }, [locale]);

  const toggleTheme = useCallback(() => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    fallbackTheme = nextTheme;

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch {
      // Keep the document theme functional if storage is blocked.
    }

    document.documentElement.dataset.theme = nextTheme;
    window.dispatchEvent(new Event(PREFERENCES_EVENT));
  }, [theme]);

  const translate = useCallback(
    (text: LocalizedText): string => text[locale],
    [locale],
  );

  const value = useMemo<PortfolioPreferencesContextValue>(
    () => ({ locale, theme, translate, toggleLocale, toggleTheme }),
    [locale, theme, translate, toggleLocale, toggleTheme],
  );

  return (
    <PortfolioPreferencesContext.Provider value={value}>
      {children}
    </PortfolioPreferencesContext.Provider>
  );
}

export function usePortfolioPreferences(): PortfolioPreferencesContextValue {
  const context = useContext(PortfolioPreferencesContext);

  if (!context) {
    throw new Error(
      "usePortfolioPreferences must be used within PortfolioPreferencesProvider",
    );
  }

  return context;
}
