import { Link } from "@/i18n/navigation";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  /** Если true — компактная карточка для главной (без длинного описания) */
  compact?: boolean;
};

const linkLabels: Record<string, string> = {
  github: "GitHub",
  play: "Google Play",
  appstore: "App Store",
  landing: "Сайт",
};

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  const imageSrc = project.images[0];
  const linkEntries = Object.entries(project.links).filter(
    ([_, url]) => url
  ) as [string, string][];

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-soft transition-transform duration-200 hover:-translate-y-1 hover:border-teal-500/60 hover:shadow-soft-dark dark:border-gray-800 dark:bg-gray-900 dark:shadow-soft-dark dark:hover:border-teal-400/60">
      {/* Скрин сверху — плейсхолдер (подставьте свои скриншоты в public/projects/) */}
      <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-teal-100 to-cyan-100 dark:from-gray-800 dark:to-gray-700">
        {imageSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageSrc}
            alt={project.title}
            className="h-full w-full object-cover"
          />
        ) : null}
        <div className="absolute inset-0 flex items-center justify-center text-5xl font-bold text-teal-600/30 dark:text-teal-400/20">
          {project.title.charAt(0)}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {compact ? (
              <Link
                href={`/projects#${project.id}`}
                className="hover:underline"
              >
                {project.title}
              </Link>
            ) : (
              project.title
            )}
          </h3>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            {compact ? project.shortDescription : project.longDescription}
          </p>
        </div>

        {/* Бейджи технологий */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-lg bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300"
            >
              {t}
            </span>
          ))}
        </div>

        {/* Кнопки ссылок */}
        {linkEntries.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-2">
            {linkEntries.map(([key, url]) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-xl bg-teal-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600"
              >
                {linkLabels[key] ?? key}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
