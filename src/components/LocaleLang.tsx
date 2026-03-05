"use client";

import { useLocale } from "next-intl";
import { useEffect } from "react";

/** Устанавливает lang на <html> по текущей локали. */
export function LocaleLang() {
  const locale = useLocale();
  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);
  return null;
}
