<<<<<<< HEAD
# KODA — сайт-визитка веб-студии

Одностраничный лендинг на React + Vite + Tailwind CSS.

## Быстрый старт

```bash
npm install
npm run dev
```

Откройте http://localhost:5173 — сайт запустится с горячей перезагрузкой.

## Сборка для продакшена

```bash
npm run build
```

Готовые файлы появятся в папке `dist/` — их можно загрузить на любой хостинг (Vercel, Netlify, обычный хостинг по FTP).

## Структура проекта

```
src/
  theme.js              — цвета, шрифты, общие константы (единый источник)
  hooks/
    useReveal.js         — хук анимации появления при скролле
  components/
    ui/                  — переиспользуемые кусочки: Frame, Tag, Button, Reveal
    Header.jsx            — шапка с навигацией
    Hero.jsx               — первый экран
    Terminal.jsx            — анимированный терминал в hero
    Services.jsx             — услуги (раздел 01)
    Process.jsx               — процесс работы (раздел 02)
    CaseStudies.jsx             — кейсы JUU и ЖК (раздел 03)
    Pricing.jsx                  — цены (раздел 04)
    FAQ.jsx                       — частые вопросы (раздел 05)
    Contact.jsx                    — форма связи (раздел 06)
    Footer.jsx                      — подвал + мобильная кнопка снизу
    ScrollRuler.jsx                  — линейка прогресса скролла слева
  App.jsx                — собирает все секции вместе
```

## Что стоит поправить перед публикацией

- Реальные цены в `src/components/Pricing.jsx`
- Имя со-основателя и контакты в `src/components/Contact.jsx`
- Ссылки на Telegram и почту (сейчас `href="#"`)
- При желании — добавить свой домен и favicon в `public/`
=======
# koda-studio
>>>>>>> 8a25be595089f8a6ecf680ad8192eaa948217012
