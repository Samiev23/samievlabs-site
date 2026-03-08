import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { routing } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contact");

  return (
    <div className="px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <header className="mb-10 text-center sm:mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            {t("description")}
          </p>
        </header>

        <section className="grid gap-8 sm:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">
          <div className="space-y-8 rounded-2xl border border-gray-200 bg-white p-8 shadow-soft dark:border-gray-800 dark:bg-gray-900 dark:shadow-soft-dark">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                {t("email")}
              </h2>
              <a
                href="mailto:hello@wellnesslabs.example.com"
                className="mt-2 block text-lg font-medium text-teal-600 hover:underline dark:text-teal-400"
              >
                hello@wellnesslabs.example.com
              </a>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                {t("github")}
              </h2>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-lg font-medium text-teal-600 hover:underline dark:text-teal-400"
              >
                github.com/wellnesslabs
              </a>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400">
                {t("telegram")}
              </h2>
              <a
                href="https://t.me/sxmn1"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-lg font-medium text-teal-600 hover:underline dark:text-teal-400"
              >
                t.me/wellnesslabs
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl border border-dashed border-teal-300/60 bg-teal-50/50 p-6 text-sm text-teal-900 dark:border-teal-400/50 dark:bg-teal-950/40 dark:text-teal-50">
            <p className="leading-relaxed">
              {t("hint")}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
