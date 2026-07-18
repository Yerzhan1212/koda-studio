import { T } from "../theme";
import { useReveal } from "../hooks/useReveal";
import Tag from "./ui/Tag";
import Reveal from "./ui/Reveal";

const STEPS = [
  { n: "01", title: "Бриф и цели", text: "Разбираемся, что должен решать сайт и какой результат нужен бизнесу." },
  { n: "02", title: "Прототип и дизайн", text: "Собираем структуру и макет, согласовываем до старта разработки." },
  { n: "03", title: "Разработка", text: "Параллельно ведём фронтенд и бэкенд, показываем промежуточные версии." },
  { n: "04", title: "Запуск", text: "Разворачиваем на проде, передаём доступы, остаёмся на связи после запуска." },
];

function ProcessTrack() {
  const [ref, visible] = useReveal(0.3);
  return (
    <div ref={ref} className="grid md:grid-cols-4 gap-9 md:gap-0 relative">
      <div
        className="hidden md:block absolute left-0 right-0 h-px"
        style={{ top: 17, background: `repeating-linear-gradient(90deg, ${T.line} 0 8px, transparent 8px 14px)` }}
      />
      <div
        className="hidden md:block absolute left-0 h-px"
        style={{ top: 17, width: visible ? "100%" : "0%", background: T.teal400, transition: `width 1.1s ${T.easeOut}` }}
      />
      {STEPS.map((s) => (
        <div key={s.n} className="relative pr-6">
          <div
            className="w-9 h-9 rounded-full border-2 flex items-center justify-center mb-5 relative z-10 bg-white"
            style={{ borderColor: T.teal400, color: T.teal600, fontFamily: "'JetBrains Mono', monospace", fontSize: 12.5 }}
          >
            {s.n}
          </div>
          <h3 className="font-semibold text-[17px] mb-2" style={{ color: T.ink900 }}>{s.title}</h3>
          <p className="text-sm" style={{ color: T.ink500 }}>{s.text}</p>
        </div>
      ))}
    </div>
  );
}

export default function Process() {
  return (
    <section id="process" className="py-24">
      <div className="max-w-[1180px] mx-auto px-8">
        <Reveal className="max-w-[640px] mb-14">
          <Tag>02 — ПРОЦЕСС</Tag>
          <h2 className="font-semibold my-3.5" style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "clamp(26px,3vw,36px)", color: T.ink900 }}>
            Как проходит работа
          </h2>
          <p style={{ color: T.ink500 }}>Четыре этапа, один и тот же состав команды от брифа до запуска.</p>
        </Reveal>
        <ProcessTrack />
      </div>
    </section>
  );
}
