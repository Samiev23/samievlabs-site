"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-12 dark:border-gray-800 dark:bg-gray-900/50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {t("copyright", { year })}
          </p>
          <div className="flex gap-6">
            <Link
              href="/projects"
              className="text-sm text-gray-500 transition hover:text-gray-900 dark:hover:text-gray-300"
            >
              {t("projects")}
            </Link>
            <Link
              href="/contact"
              className="text-sm text-gray-500 transition hover:text-gray-900 dark:hover:text-gray-300"
            >
              {t("contact")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
