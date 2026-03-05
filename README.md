# Wellness Labs — портфолио разработчика

Портфолио на **Next.js 14 (App Router)** и **Tailwind CSS**: главная, проекты, контакты, тёмная тема и SEO.

## Запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Структура

- **`/`** — главная: hero, кнопки «Проекты» и «Контакты», Featured projects (3 карточки), About, Tech stack, footer
- **`/projects`** — список всех проектов из `src/data/projects.ts`
- **`/contact`** — контакты (подставьте свои email и ссылки в `src/app/contact/page.tsx`)

## Данные проектов

Файл **`src/data/projects.ts`**: массив объектов с полями:

- `title`, `shortDescription`, `longDescription`
- `tech` — массив технологий
- `links` — `{ github?, play?, appstore?, landing? }`
- `images` — массив путей к скриншотам (например `/projects/wellness-preview.png`)
- `featured: true` — показывать в блоке «Featured projects» на главной

Скриншоты положите в **`public/projects/`** и укажите пути в `images`.

## Тема и SEO

- Переключатель темы (светлая/тёмная) в шапке; выбор сохраняется в `localStorage`
- В `src/app/layout.tsx` заданы `title`, `description`, OpenGraph, `icons` (favicon)
- Favicon-заглушка: **`public/favicon.svg`** (можно заменить на свой)

## Сборка

```bash
npm run build
npm start
```
