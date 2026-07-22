import { LayoutGrid, Code2, ShieldCheck, Wrench, Check } from "lucide-react";
import { T } from "../theme";
import Tag from "./ui/Tag";
import Frame from "./ui/Frame";
import Reveal from "./ui/Reveal";

const SERVICES = [
  {
    icon: LayoutGrid,
    title: "Сайты и лендинги",
    text: "Визитка, портфолио или продающая страница под конкретную цель — рассказать о бизнесе или собрать заявки. Быстро, аккуратно, без лишних элементов.",
    bullets: ["Адаптивная вёрстка под все устройства", "Базовая SEO-оптимизация", "Форма заявки с уведомлениями", "Интеграция с Яндекс.Метрикой / Google Analytics"],
  },
  {
    icon: Code2,
    title: "Веб-приложения",
    text: "Личные кабинеты, системы бронирования, внутренние панели — сервисы под конкретный процесс вашего бизнеса, а не типовой конструктор.",
    bullets: ["Личный кабинет пользователя", "Онлайн-бронирование и календарь", "Уведомления по email / SMS", "Разделение ролей: клиент / администратор"],
  },
  {
    icon: ShieldCheck,
    title: "Бэкенд и интеграции",
    text: "То, что заставляет сайт работать, а не просто выглядеть: сервер, база данных, внешние сервисы и платежи.",
    bullets: ["REST API на Python / Node.js", "Базы данных PostgreSQL", "Приём онлайн-оплаты (Kaspi, карты)", "Интеграции с CRM и мессенджерами"],
  },
  {
    icon: Wrench,
    title: "Поддержка и развитие",
    text: "После запуска сайт не остаётся один: мы следим, чтобы всё работало, и помогаем расти дальше.",
    bullets: ["Мониторинг и резервные копии", "Правки и новые функции", "Консультации по развитию сайта", "Реакция на обращения в течение дня"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-[1180px] mx-auto px-8">
        <Reveal className="max-w-[640px] mb-14">
          <Tag>01 — УСЛУГИ</Tag>
          <h2 className="font-semibold my-3.5" style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "clamp(26px,3vw,36px)", color: T.ink900 }}>
            Что мы делаем
          </h2>
          <p style={{ color: T.ink500 }}>
            Фронтенд на React, бэкенд на Python — сочетание, которое даёт быстрый интерфейс и надёжную систему под ним. Ниже — подробнее, что входит в каждое направление.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-5">
          {SERVICES.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <Frame className="p-8 h-full bg-white hover:shadow-lg transition-shadow duration-300" style={{ borderColor: T.line }}>
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5" style={{ background: T.tealTint }}>
                  <s.icon size={22} style={{ color: T.teal600 }} />
                </div>
                <h3 className="font-semibold text-[19px] mb-2.5" style={{ color: T.ink900 }}>
                  {s.title}
                </h3>
                <p className="text-[14.5px] mb-5" style={{ color: T.ink500 }}>
                  {s.text}
                </p>
                <ul className="space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-[13.5px]" style={{ color: T.ink700 }}>
                      <Check size={15} style={{ color: T.teal600, marginTop: 2, flexShrink: 0 }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </Frame>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
