import { CheckCircle2, ArrowRight } from "lucide-react";
import { T } from "../theme";
import Tag from "./ui/Tag";
import Btn from "./ui/Button";
import Frame from "./ui/Frame";
import Terminal from "./Terminal";

const TRUST_BULLETS = [
  "Фиксированная смета до начала работы",
  "Первая версия сайта — за 5–7 дней",
  "Прямой контакт с разработчиками, без менеджеров",
];

export default function Hero() {
  return (
    <section className="relative pt-[168px] pb-[100px] blueprint-grid overflow-hidden">
      <div className="relative max-w-[1180px] mx-auto px-8 grid lg:grid-cols-[1.05fr_0.95fr] gap-14 items-center">
        <div>
          <Tag className="mb-6">ВЕБ-СТУДИЯ · ASTANA</Tag>
          <h1
            className="font-bold mb-6"
            style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "clamp(32px,4.4vw,52px)", lineHeight: 1.14, letterSpacing: "-0.01em", color: T.ink900 }}
          >
            <span className="hero-line"><span style={{ animationDelay: ".05s" }}>Сайт, который</span></span>
            <span className="hero-line"><span style={{ animationDelay: ".16s" }}>приносит заявки,</span></span>
            <span className="hero-line"><span style={{ animationDelay: ".27s", color: T.teal600 }}>а не просто существует</span></span>
          </h1>
          <p className="text-[17.5px] max-w-[480px] mb-7" style={{ color: T.ink500 }}>
            Проектируем и разрабатываем сайты и веб-сервисы под задачи конкретного бизнеса — от брифа до потока клиентов. Два инженера, без агентств и лишних согласований.
          </p>
          <ul className="mb-8 space-y-2.5">
            {TRUST_BULLETS.map((b) => (
              <li key={b} className="flex items-center gap-2.5 text-[14.5px]" style={{ color: T.ink700 }}>
                <CheckCircle2 size={17} style={{ color: T.teal600, flexShrink: 0 }} />
                {b}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-3.5">
            <Btn href="#contact" variant="primary">
              Обсудить проект <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
            </Btn>
            <Btn href="#cases" variant="ghost">
              Смотреть кейсы
            </Btn>
          </div>
        </div>

        <Frame
          className="rounded-lg overflow-hidden"
          style={{ background: T.navy900, boxShadow: "0 30px 60px -20px rgba(15,23,42,.35)", borderColor: "#1E2F45" }}
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ background: T.navy800, borderColor: "#1E2F45" }}>
            {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
              <span key={c} className="w-[9px] h-[9px] rounded-full" style={{ background: c }} />
            ))}
            <span className="ml-2 text-xs" style={{ fontFamily: "'JetBrains Mono', monospace", color: "#7D9A9A" }}>
              koda — deploy
            </span>
          </div>
          <Terminal />
        </Frame>
      </div>
    </section>
  );
}
