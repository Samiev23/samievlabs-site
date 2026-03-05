"use client";

import { useTranslations, useLocale } from "next-intl";
import { useTheme } from "./ThemeProvider";
import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const t = useTranslations("nav");
  const tAria = useTranslations("aria");
  const pathname = usePathname();
  const locale = useLocale();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-sm dark:border-gray-800 dark:bg-gray-950/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <Link
          href="/"
          className="text-lg font-semibold text-gray-900 dark:text-white"
        >
          {t("brand")}
        </Link>
        <nav className="flex flex-1 items-center justify-end gap-2 sm:gap-6">
          <Link
            href="/projects"
            className="text-gray-600 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            {t("projects")}
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
          >
            {t("contact")}
          </Link>

          {/* Переключатель языка RU / EN — пилл в стиле UI */}
          <div
            className="flex rounded-2xl border border-gray-200 bg-gray-50 p-1 dark:border-gray-700 dark:bg-gray-800/80"
            role="group"
            aria-label="Language"
          >
            {routing.locales.map((loc) => (
              <Link
                key={loc}
                href={pathname}
                locale={loc}
                aria-label={loc === "ru" ? tAria("localeRu") : tAria("localeEn")}
                className={`rounded-xl px-3 py-1.5 text-sm font-medium transition sm:px-4 ${
                  locale === loc
                    ? "bg-white text-gray-900 shadow-soft dark:bg-gray-700 dark:text-white"
                    : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                }`}
              >
                {loc.toUpperCase()}
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className="rounded-2xl p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white"
            aria-label={
              theme === "light" ? tAria("themeDark") : tAria("themeLight")
            }
          >
            {theme === "light" ? (
              <span className="text-xl">🌙</span>
            ) : (
              <span className="text-xl">☀️</span>
            )}
          </button>
        </nav>
      </div>
    </header>
  );
}
