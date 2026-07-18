import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { T } from "../theme";
import Tag from "./ui/Tag";
import Frame from "./ui/Frame";
import Reveal from "./ui/Reveal";

const FAQ_ITEMS = [
  { q: "Сколько это будет стоить?", a: "Смету фиксируем до старта работы, после короткого брифа о задаче — ориентир цен указан в разделе выше. Никаких доплат за то, что обсудили заранее." },
  { q: "Сколько занимает разработка?", a: "Лендинг — 1–2 недели, корпоративный сайт — 3–4 недели, веб-приложение — от 6 недель. Сроки зависят от объёма задачи и уточняются на брифе." },
  { q: "Что если понадобятся правки после запуска?", a: "Остаёмся на связи. Небольшие правки — бесплатно в течение месяца после запуска, дальше — разовая доплата или помесячная поддержка, как удобнее вам." },
  { q: "Кому принадлежит код и дизайн?", a: "Полностью вам: исходный код, доступы к хостингу и репозиторию, макет — всё передаётся после финальной оплаты, без скрытых условий." },
];

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <Frame className="overflow-hidden bg-white">
      <button onClick={onToggle} className="w-full flex items-center justify-between gap-4 p-5 text-left">
        <span className="font-semibold text-[15.5px]" style={{ color: T.ink900 }}>{item.q}</span>
        <ChevronDown size={18} style={{ color: T.teal600, transform: isOpen ? "rotate(180deg)" : "rotate(0)", transition: `transform .3s ${T.easeOut}`, flexShrink: 0 }} />
      </button>
      <div style={{ maxHeight: isOpen ? 200 : 0, opacity: isOpen ? 1 : 0, overflow: "hidden", transition: `max-height .35s ${T.easeOut}, opacity .25s ${T.easeOut}` }}>
        <p className="px-5 pb-5 text-sm" style={{ color: T.ink500 }}>{item.a}</p>
      </div>
    </Frame>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="py-24">
      <div className="max-w-[1180px] mx-auto px-8">
        <Reveal className="max-w-[640px] mb-14">
          <Tag>05 — ВОПРОСЫ</Tag>
          <h2 className="font-semibold my-3.5" style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "clamp(26px,3vw,36px)", color: T.ink900 }}>
            Частые вопросы
          </h2>
          <p style={{ color: T.ink500 }}>То, что обычно спрашивают перед тем, как решиться на разработку сайта.</p>
        </Reveal>
        <div className="max-w-[760px] space-y-3">
          {FAQ_ITEMS.map((item, i) => (
            <FAQItem key={item.q} item={item} isOpen={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
