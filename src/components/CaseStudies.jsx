import { useState } from "react";
import { T } from "../theme";
import Tag from "./ui/Tag";
import Frame from "./ui/Frame";
import Reveal from "./ui/Reveal";

const CASES = [
  {
    tagLabel: "CAR WASH BOOKING",
    title: "JUU — онлайн-бронирование автомойки",
    description:
      "Платформа для записи на мойку в реальном времени: клиент видит свободные слоты, мойка управляет загрузкой из админ-панели, без звонков и путаницы в блокноте.",
    stack: ["React", "Go", "PostgreSQL", "WebSocket"],
    result: "Запись без звонков, загрузка мойки видна в реальном времени",
    pills: [{ w: "40%" }, { w: "75%" }, { w: "60%", accent: true }, { w: "50%" }],
  },
  {
    tagLabel: "PROPERTY MANAGEMENT",
    title: "Сайт для управляющей компании ЖК",
    description:
      "Информационный сайт с личным кабинетом жильца: показания счётчиков, заявки на обслуживание, объявления — вместо разрозненных чатов и бумажных бланков.",
    stack: ["React", "Node.js", "PostgreSQL"],
    result: "Заявки и объявления в одном месте для всех жильцов",
    pills: [{ w: "55%" }, { w: "80%" }, { w: "35%", accent: true }, { w: "65%" }],
  },
];

function CaseCard({ c, delay }) {
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: py * -6, ry: px * 6 });
  };
  const onLeave = () => setTilt({ rx: 0, ry: 0 });

  return (
    <Reveal delay={delay}>
      <Frame className="grid md:grid-cols-2 mb-5 bg-white overflow-hidden" style={{ perspective: 1200 }}>
        <div
          className="p-7 min-h-[280px] flex flex-col justify-center"
          style={{ background: "linear-gradient(160deg, #F1F5F9, #E7EEF3)" }}
          onMouseMove={onMove}
          onMouseLeave={onLeave}
        >
          <div
            className="rounded-md overflow-hidden border bg-white shadow-sm"
            style={{
              borderColor: T.line,
              transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
              transition: `transform .45s ${T.easeOut}`,
              transformStyle: "preserve-3d",
            }}
          >
            <div className="flex gap-1.5 px-3 py-2.5 border-b" style={{ borderColor: T.line }}>
              {[0, 1, 2].map((i) => (
                <span key={i} className="w-2 h-2 rounded-full" style={{ background: T.line }} />
              ))}
            </div>
            <div className="p-5">
              {c.pills.map((p, i) => (
                <div key={i} className="h-2.5 rounded-md mb-2.5" style={{ width: p.w, background: p.accent ? T.teal400 : "#E2E8F0", opacity: p.accent ? 0.6 : 1 }} />
              ))}
            </div>
          </div>
        </div>
        <div className="p-8 md:p-10 border-t md:border-t-0 md:border-l" style={{ borderColor: T.line }}>
          <Tag className="mb-4">{c.tagLabel}</Tag>
          <h3 className="text-xl font-semibold mb-3" style={{ color: T.ink900 }}>{c.title}</h3>
          <p className="text-[15px] mb-4" style={{ color: T.ink500 }}>{c.description}</p>
          <div className="flex flex-wrap gap-2 mb-5">
            {c.stack.map((s) => (
              <span key={s} className="text-[11.5px] rounded px-2.5 py-1 border" style={{ fontFamily: "'JetBrains Mono', monospace", color: T.ink500, borderColor: T.line }}>
                {s}
              </span>
            ))}
          </div>
          <div className="text-sm flex gap-2 items-baseline font-medium" style={{ color: T.teal600 }}>
            → {c.result}
          </div>
        </div>
      </Frame>
    </Reveal>
  );
}

export default function CaseStudies() {
  return (
    <section id="cases" className="py-24">
      <div className="max-w-[1180px] mx-auto px-8">
        <Reveal className="max-w-[640px] mb-14">
          <Tag>03 — КЕЙСЫ</Tag>
          <h2 className="font-semibold my-3.5" style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "clamp(26px,3vw,36px)", color: T.ink900 }}>
            Последние проекты
          </h2>
          <p style={{ color: T.ink500 }}>Два примера того, как задача бизнеса превращается в работающий сервис.</p>
        </Reveal>
        {CASES.map((c, i) => (
          <CaseCard key={c.title} c={c} delay={i * 100} />
        ))}
      </div>
    </section>
  );
}
