import { useState } from "react";
import { Settings2 } from "lucide-react";
import { T } from "../theme";
import Tag from "./ui/Tag";
import Frame from "./ui/Frame";
import Reveal from "./ui/Reveal";
import Modal from "./ui/Modal";
import PriceBuilder from "./PriceBuilder";
import { BASE_TYPES, formatPrice } from "./pricingData";

export default function Pricing() {
  const [open, setOpen] = useState(false);
  const [initialBase, setInitialBase] = useState(BASE_TYPES[0].id);

  const openBuilder = (baseId) => {
    setInitialBase(baseId);
    setOpen(true);
  };

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-[1180px] mx-auto px-8">
        <Reveal className="max-w-[640px] mb-14">
          <Tag>04 — ЦЕНЫ</Tag>
          <h2 className="font-semibold my-3.5" style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "clamp(26px,3vw,36px)", color: T.ink900 }}>
            Соберите свой сайт и узнайте цену
          </h2>
          <p style={{ color: T.ink500 }}>
            Выберите тип сайта и нужные функции — конструктор сразу посчитает ориентировочную стоимость. Точную смету подтвердим на коротком брифе.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-5 mb-8">
          {BASE_TYPES.map((b, i) => (
            <Reveal key={b.id} delay={i * 100}>
              <Frame className="p-8 h-full flex flex-col bg-white hover:shadow-lg transition-shadow duration-300" style={{ borderColor: T.line }}>
                <div className="text-[13px] mb-3 font-semibold" style={{ fontFamily: "'JetBrains Mono', monospace", color: T.ink500 }}>
                  {b.title.toUpperCase()}
                </div>
                <div className="font-semibold text-[24px] mb-2" style={{ fontFamily: "'Unbounded', sans-serif", color: T.ink900 }}>
                  от {formatPrice(b.price)}
                </div>
                <p className="text-[13.5px] mb-6 flex-1" style={{ color: T.ink500 }}>{b.desc}</p>
                <button
                  onClick={() => openBuilder(b.id)}
                  className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-[13.5px] font-bold border transition-colors"
                  style={{ borderColor: T.line, color: T.ink900 }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = T.teal400)}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = T.line)}
                >
                  <Settings2 size={15} /> Настроить и посчитать
                </button>
              </Frame>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-lg" style={{ background: T.ink900 }}>
            <p className="text-[14.5px] text-white max-w-[440px]">
              Не уверены, что выбрать? Соберите вариант с нуля в конструкторе — за пару кликов.
            </p>
            <button
              onClick={() => openBuilder(BASE_TYPES[0].id)}
              className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-2.5 text-[13.5px] font-bold whitespace-nowrap"
              style={{ background: T.teal400, color: "#fff" }}
            >
              Открыть конструктор
            </button>
          </div>
        </Reveal>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} title="Конструктор сайта">
        <PriceBuilder key={initialBase} initialBase={initialBase} />
      </Modal>
    </section>
  );
}