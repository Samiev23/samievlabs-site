import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { LocaleLang } from "@/components/LocaleLang";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://samievlabs.example.com";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const isRu = locale === "ru";
  return {
    title: {
      default: isRu
        ? "Samiev Labs Tech | Студия приложений"
        : "Samiev Labs Tech | App Studio",
      template: "%s | Samiev Labs Tech",
    },
    description: isRu
      ? "Samiev Labs Tech — независимая студия приложений, создающая продукты для сна, wellness и ментального благополучия."
      : "Samiev Labs Tech is an independent app studio building products focused on sleep, wellness and mental clarity.",
    keywords: [
      "portfolio",
      "developer",
      "wellness",
      "mental health",
      "React",
      "Next.js",
    ],
    openGraph: {
      url: siteUrl,
      siteName: "Samiev Labs Tech",
    },
    icons: { icon: "/favicon.svg" },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      <LocaleLang />
      <ThemeProvider>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}
