# sabitsky.com

Перенесенный портфолио-сайт на Next.js (`App Router`, `TypeScript`, `CSS Modules`).

## Локальный запуск

```bash
npm install
npm run dev
```

Сайт откроется на `http://localhost:3000`.

## Проверка перед коммитом

```bash
npm run lint
npm run build
```

## Где редактировать контент

Весь текстовый контент вынесен в один файл:

- `src/data/site-content.ts`

Там находятся:

- навигация (`NavSectionId`, `navItems`)
- опыт (`ExperienceItem`, `experience`)
- проекты (`ProjectItem`, `projects`)
- контакты (`contactLinks`)
- метаданные сайта (`siteMeta`)

## Структура проекта

- `src/app/layout.tsx` — корневой layout + шрифты через `next/font/google`
- `src/app/page.tsx` — сборка страницы из секций
- `src/components/layout/*` — header/footer
- `src/components/sections/*` — Hero/Manifesto/Work/Contact
- `src/components/animation/*` — анимационные client-компоненты
- `src/hooks/*` — client-хуки (`useInView`, `useScrollSpy`)
- `src/styles/globals.css` — глобальные токены и базовые стили
- `public/images/*` — изображения сайта

## Визуальный референс

Исходный монолитный файл сохранен для сравнения:

- `portfolio-v4.jsx`

