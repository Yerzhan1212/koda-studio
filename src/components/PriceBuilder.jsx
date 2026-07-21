import { useMemo, useState } from "react";
import { Check, Copy, Send } from "lucide-react";
import { T } from "../theme";
import { BASE_TYPES, FEATURES, formatPrice } from "./pricingData";

export default function PriceBuilder({ initialBase }) {
  const [baseType, setBaseType] = useState(initialBase || BASE_TYPES[0].id);
  const [features, setFeatures] = useState({});
  const [copied, setCopied] = useState(false);

  const base = BASE_TYPES.find((b) => b.id === baseType) || BASE_TYPES[0];

  const total = useMemo(() => {
    let sum = base.price;
    FEATURES.forEach((f) => {
      if (features[f.id]?.checked) sum += f.price;
    });
    return sum;
  }, [base, features]);

  const toggleFeature = (id) => {
    setFeatures((prev) => ({ ...prev, [id]: { checked: !prev[id]?.checked, note: prev[id]?.note || "" } }));
  };

  const setNote = (id, note) => {
    setFeatures((prev) => ({ ...prev, [id]: { ...prev[id], note } }));
  };

  const summaryText = useMemo(() => {
    const lines = [`Тип сайта: ${base.title} — ${formatPrice(base.price)}`];
    FEATURES.forEach((f) => {
      const sel = features[f.id];
      if (sel?.checked) lines.push(`+ ${f.title} — ${formatPrice(f.price)}${sel.note ? ` (${sel.note})` : ""}`);
    });
    lines.push("", `Итого (ориентировочно): ${formatPrice(total)}`);
    return lines.join("\n");
  }, [base, features, total]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(summaryText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* буфер обмена недоступен — молча игнорируем */
    }
  };

  const mailtoHref = `mailto:hello@koda.studio?subject=${encodeURIComponent("Заявка с конструктора сайта")}&body=${encodeURIComponent(summaryText)}`;

  return (
    <div>
      <div className="mb-7">
        <h4 className="text-[13px] font-semibold mb-3" style={{ fontFamily: "'JetBrains Mono', monospace", color: T.ink500 }}>
          1. ТИП САЙТА
        </h4>
        <div className="grid sm:grid-cols-3 gap-3">
          {BASE_TYPES.map((b) => {
            const active = b.id === baseType;
            return (
              <button
                key={b.id}
                onClick={() => setBaseType(b.id)}
                className="text-left p-4 rounded-lg border transition-colors"
                style={{ borderColor: active ? T.teal400 : T.line, background: active ? T.tealTint : "#fff" }}
              >
                <div className="font-semibold text-[14px] mb-1" style={{ color: T.ink900 }}>{b.title}</div>
                <div className="text-[12.5px] mb-2" style={{ color: T.ink500 }}>{b.desc}</div>
                <div className="text-[13px] font-semibold" style={{ color: T.teal600 }}>от {formatPrice(b.price)}</div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mb-7">
        <h4 className="text-[13px] font-semibold mb-3" style={{ fontFamily: "'JetBrains Mono', monospace", color: T.ink500 }}>
          2. ДОПОЛНИТЕЛЬНЫЕ ФУНКЦИИ
        </h4>
        <div className="space-y-2">
          {FEATURES.map((f) => {
            const sel = features[f.id];
            return (
              <div key={f.id} className="border rounded-lg overflow-hidden" style={{ borderColor: sel?.checked ? T.teal400 : T.line }}>
                <label className="flex items-center gap-3 p-3.5 cursor-pointer select-none">
                  <span
                    className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 border"
                    style={{ borderColor: sel?.checked ? T.teal400 : T.line, background: sel?.checked ? T.teal400 : "#fff" }}
                  >
                    {sel?.checked && <Check size={14} color="#fff" />}
                  </span>
                  <input type="checkbox" className="hidden" checked={!!sel?.checked} onChange={() => toggleFeature(f.id)} />
                  <span className="flex-1 text-[14px]" style={{ color: T.ink900 }}>{f.title}</span>
                  <span className="text-[13px] font-semibold" style={{ color: T.ink500 }}>+{formatPrice(f.price)}</span>
                </label>
                {sel?.checked && (
                  <div className="px-3.5 pb-3.5">
                    <textarea
                      value={sel.note}
                      onChange={(e) => setNote(f.id, e.target.value)}
                      placeholder="Опишите пожелания к этой функции (необязательно)"
                      rows={2}
                      className="w-full text-[13px] p-2.5 rounded-md border resize-none"
                      style={{ borderColor: T.line, color: T.ink700 }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="rounded-lg p-5" style={{ background: T.ink900 }}>
        <div className="flex items-center justify-between mb-4">
          <span className="text-[14.5px]" style={{ color: "#94A3B8" }}>Итого (ориентировочно)</span>
          <span className="font-semibold text-[24px] text-white" style={{ fontFamily: "'Unbounded', sans-serif" }}>
            {formatPrice(total)}
          </span>
        </div>
        <p className="text-[12.5px] mb-4" style={{ color: "#64748B" }}>
          Финальную смету подтверждаем на коротком брифе — цена может измениться в зависимости от деталей задачи.
        </p>
        <div className="flex flex-col sm:flex-row gap-2.5">
             <a
            href={mailtoHref}
            className="flex-1 inline-flex items-center justify-center gap-2 rounded-md px-4 py-3 text-[14px] font-bold"
            style={{ background: T.teal400, color: "#fff" }}
                >
            <Send size={16} /> Отправить заявку на почту
            </a>
          <button
            onClick={handleCopy}
            className="inline-flex items-center justify-center gap-2 rounded-md px-4 py-3 text-[14px] font-bold border"
            style={{ borderColor: "#334155", color: "#fff" }}
          >
            <Copy size={16} /> {copied ? "Скопировано!" : "Скопировать смету"}
          </button>
        </div>
      </div>
    </div>
  );
}