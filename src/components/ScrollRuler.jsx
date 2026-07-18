import { useCallback, useEffect, useState } from "react";
import { T, SECTION_META } from "../theme";

// Превращает мотив "чертежа" в рабочий индикатор прокрутки.
// Метки читаются из реальных позиций секций на странице — не декоративные.
export default function ScrollRuler() {
  const [state, setState] = useState({ pct: 0, label: "Hero", ticks: [] });
  const topPad = 140;
  const bottomPad = 140;

  const measure = useCallback(() => {
    const docH = document.body.scrollHeight - window.innerHeight;
    const ticks = SECTION_META.map((m) => {
      const el = document.getElementById(m.id);
      const top = el ? el.offsetTop : 0;
      return { ...m, pct: docH > 0 ? Math.min(1, top / docH) : 0 };
    });
    const pct = docH > 0 ? Math.min(1, window.scrollY / docH) : 0;
    let current = "Hero";
    if (window.scrollY >= 80) {
      SECTION_META.forEach((m) => {
        const el = document.getElementById(m.id);
        if (el && window.scrollY + window.innerHeight * 0.4 >= el.offsetTop) current = m.label;
      });
    }
    setState({ pct, label: current, ticks });
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [measure]);

  const trackExpr = `(100vh - ${topPad + bottomPad}px)`;

  return (
    <div className="ruler hidden xl:block" aria-hidden="true">
      <div className="ruler-track" style={{ top: topPad, bottom: bottomPad, background: T.line }} />
      <div className="ruler-progress" style={{ top: topPad, height: `calc(${trackExpr} * ${state.pct})`, background: T.teal400 }} />
      {state.ticks.map((t) => (
        <div key={t.id}>
          <div className="ruler-tick" style={{ top: `calc(${topPad}px + ${trackExpr} * ${t.pct})`, background: T.ink300 }} />
          <div className="ruler-tick-label" style={{ top: `calc(${topPad}px + ${trackExpr} * ${t.pct})`, color: T.ink500 }}>
            {t.num}
          </div>
        </div>
      ))}
      <div className="ruler-dot" style={{ top: `calc(${topPad}px + ${trackExpr} * ${state.pct})`, background: T.teal400 }} />
      <div className="ruler-dot-label" style={{ top: `calc(${topPad}px + ${trackExpr} * ${state.pct})`, color: T.teal600 }}>
        {state.label}
      </div>
    </div>
  );
}
