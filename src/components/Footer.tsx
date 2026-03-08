"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200/80 bg-gradient-to-t from-gray-50 to-white py-10 dark:border-gray-800/80 dark:bg-gradient-to-t dark:from-gray-950 dark:to-gray-950/60">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1 text-center sm:text-left">
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
              Samiev Labs Tech
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {t("copyright", { year })}
            </p>
          </div>
          <div className="flex justify-center gap-5 text-sm sm:justify-end">
            <Link
              href="/projects"
              className="text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            >
              {t("projects")}
            </Link>
            <Link
              href="/contact"
              className="text-gray-500 transition hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
            >
              {t("contact")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
