import { T } from "../theme";
import Tag from "./ui/Tag";
import Frame from "./ui/Frame";
import Reveal from "./ui/Reveal";

const PLANS = [
  { plan: "ЛЕНДИНГ", amount: "от 150 000 ₸", timeline: "1–2 недели", features: ["Дизайн под ваш бренд", "Адаптив под все экраны", "Форма заявки и аналитика"] },
  {
    plan: "КОРПОРАТИВНЫЙ САЙТ",
    amount: "от 350 000 ₸",
    timeline: "3–4 недели",
    features: ["Несколько разделов и страниц", "Админ-панель для контента", "Интеграции: карты, формы, CRM"],
    highlight: true,
  },
  { plan: "ВЕБ-ПРИЛОЖЕНИЕ", amount: "от 700 000 ₸", timeline: "от 6 недель", features: ["Личный кабинет, бронирование", "Собственный бэкенд и БД", "Поддержка после запуска"] },
];

function PriceCard({ plan, amount, timeline, features, highlight, delay }) {
  return (
    <Reveal delay={delay}>
      <Frame
        className="p-8 h-full transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-lg"
        style={{ background: highlight ? T.tealTint : "#fff", borderColor: highlight ? T.teal400 : T.line }}
      >
        <div className="text-[13px] mb-4 font-semibold" style={{ fontFamily: "'JetBrains Mono', monospace", color: T.ink500 }}>{plan}</div>
        <div className="font-semibold text-[28px] mb-1.5" style={{ fontFamily: "'Unbounded', sans-serif", color: T.ink900 }}>{amount}</div>
        <div className="text-[13px] mb-6" style={{ color: T.ink500 }}>{timeline}</div>
        <ul>
          {features.map((f) => (
            <li key={f} className="text-sm py-1.5 border-t" style={{ color: T.ink700, borderColor: T.line }}>
              {f}
            </li>
          ))}
        </ul>
      </Frame>
    </Reveal>
  );
}

export default function Pricing() {
  return (
    <section id="pricing" className="py-24">
      <div className="max-w-[1180px] mx-auto px-8">
        <Reveal className="max-w-[640px] mb-14">
          <Tag>04 — ЦЕНЫ</Tag>
          <h2 className="font-semibold my-3.5" style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "clamp(26px,3vw,36px)", color: T.ink900 }}>
            Стоимость и сроки
          </h2>
          <p style={{ color: T.ink500 }}>Ориентир для планирования бюджета — точная смета после брифа.</p>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-5">
          {PLANS.map((p, i) => (
            <PriceCard key={p.plan} {...p} delay={i * 120} />
          ))}
        </div>
        <p className="mt-5 text-[12.5px]" style={{ color: T.ink500 }}>
          Цены ориентировочные и зависят от объёма задачи — уточняем после брифа.
        </p>
      </div>
    </section>
  );
}
