import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { getFeaturedProjects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");
  const featured = getFeaturedProjects();

  return (
    <div>
      <section className="relative overflow-hidden px-6 py-24 sm:py-32">
        <div className="pointer-events-none absolute inset-x-0 -top-40 -z-10 flex justify-center blur-3xl">
          <div className="h-72 w-[40rem] bg-gradient-to-tr from-teal-500/40 via-cyan-400/30 to-indigo-500/30 dark:from-teal-400/30 dark:via-cyan-300/20 dark:to-indigo-500/30" />
        </div>
        <div className="mx-auto max-w-3xl">
          <div className="rounded-3xl border border-white/60 bg-white/80 p-10 text-center shadow-soft backdrop-blur-md dark:border-white/10 dark:bg-gray-950/70">
            <div className="inline-flex items-center justify-center rounded-full border border-gray-200/70 bg-white/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.28em] text-gray-600 dark:border-white/10 dark:bg-gray-900/70 dark:text-gray-300">
              Samiev Labs Tech · App Studio
            </div>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
              {t("title")}
            </h1>
            <p className="mt-5 text-lg text-gray-600 dark:text-gray-300 sm:text-xl">
              {t("subtitle")}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/projects"
                className="rounded-2xl bg-teal-600 px-7 py-3 text-base font-medium text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-teal-700 hover:shadow-soft-dark dark:bg-teal-500 dark:hover:bg-teal-400"
              >
                {t("ctaProjects")}
              </Link>
              <Link
                href="/contact"
                className="rounded-2xl border border-gray-300 bg-white px-7 py-3 text-base font-medium text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 dark:hover:bg-gray-800"
              >
                {t("ctaContact")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50/50 px-6 py-20 dark:border-gray-800 dark:bg-gray-900/30">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 text-sm font-medium uppercase tracking-[0.28em] text-gray-500 dark:text-gray-400">
            Featured
          </div>
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t("featuredTitle")}
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((project) => (
              <ProjectCard key={project.id} project={project} compact />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-2xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            >
              {t("allProjects")}
            </Link>
          </div>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-gray-500 dark:text-gray-400">
            Studio
          </div>
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t("aboutTitle")}
          </h2>
          <div className="space-y-4 text-gray-600 dark:text-gray-400">
            <p className="text-lg leading-relaxed">{t("about1")}</p>
            <p className="leading-relaxed">{t("about2")}</p>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-200 bg-gray-50/50 px-6 py-20 dark:border-gray-800 dark:bg-gray-900/30">
        <div className="mx-auto max-w-6xl">
          <div className="mb-4 text-sm font-medium uppercase tracking-[0.28em] text-gray-500 dark:text-gray-400">
            Stack
          </div>
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            {t("techTitle")}
          </h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
            {[
              "Kotlin",
              "Jetpack Compose",
              "Firebase",
              "Android",
              "Material Design",
            ].map((tech) => (
              <div
                key={tech}
                className="rounded-2xl border border-gray-200 bg-white py-4 text-center text-gray-700 shadow-soft dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
