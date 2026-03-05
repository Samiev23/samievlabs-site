/**
 * Данные проектов для портфолио.
 * Каждый проект: название, краткое/полное описание, технологии, ссылки, изображения.
 */
export type ProjectLinks = {
  github?: string;
  play?: string;      // Google Play
  appstore?: string;  // App Store
  landing?: string;   // Сайт/лендинг
};

export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  tech: string[];
  links: ProjectLinks;
  images: string[]; // URL или пути к скриншотам
  featured?: boolean; // показывать в "Featured projects" на главной
};

export const projects: Project[] = [
  {
    id: "wellness-tracker",
    title: "Wellness Tracker",
    shortDescription: "Приложение для отслеживания настроения и привычек.",
    longDescription: "Мобильное приложение помогает пользователям вести дневник настроения, отслеживать сон и полезные привычки. Есть напоминания и простые отчёты.",
    tech: ["React Native", "TypeScript", "Firebase"],
    links: {
      github: "https://github.com",
      play: "https://play.google.com",
    },
    images: ["/projects/wellness-preview.png"],
    featured: true,
  },
  {
    id: "mindful-breaks",
    title: "Mindful Breaks",
    shortDescription: "Короткие упражнения для перерывов и снятия стресса.",
    longDescription: "Веб-приложение с таймером и подборкой коротких дыхательных и расслабляющих упражнений для офисных перерывов.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    links: {
      github: "https://github.com",
      landing: "https://example.com",
    },
    images: ["/projects/mindful-preview.png"],
    featured: true,
  },
  {
    id: "calm-diary",
    title: "Calm Diary",
    shortDescription: "Дневник мыслей с экспортом и тегами.",
    longDescription: "Минималистичный дневник для записей мыслей и рефлексии. Поддержка тегов, поиска и экспорта в PDF.",
    tech: ["React", "Node.js", "PostgreSQL"],
    links: {
      github: "https://github.com",
      appstore: "https://apps.apple.com",
    },
    images: ["/projects/calm-preview.png"],
    featured: true,
  },
  {
    id: "sleep-sounds",
    title: "Sleep Sounds",
    shortDescription: "Фоновые звуки для сна и концентрации.",
    longDescription: "Плеер с белым шумом, дождём и другими фонами. Таймер сна и сохранение избранного.",
    tech: ["Vue.js", "Web Audio API"],
    links: {
      github: "https://github.com",
      landing: "https://example.com",
    },
    images: ["/projects/sleep-preview.png"],
    featured: false,
  },
  {
    id: "habit-stack",
    title: "Habit Stack",
    shortDescription: "Трекер привычек с цепочками и статистикой.",
    longDescription: "Приложение для формирования привычек: ежедневные чек-листы, визуализация серий и еженедельная статистика.",
    tech: ["React Native", "Expo", "Supabase"],
    links: {
      github: "https://github.com",
      play: "https://play.google.com",
      appstore: "https://apps.apple.com",
    },
    images: ["/projects/habit-preview.png"],
    featured: false,
  },
];

/** Проекты для блока "Featured" на главной (первые 3 с featured: true) */
export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured).slice(0, 3);
}
