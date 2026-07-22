import { Send, Mail } from "lucide-react";
import { T } from "../theme";
import Btn from "./ui/Button";
import Reveal from "./ui/Reveal";

export default function Contact() {
  return (
    <section id="contact" className="py-28 text-center" style={{ background: T.ink900 }}>
      <div className="max-w-[1180px] mx-auto px-8">
        <Reveal className="flex justify-center">
          <span
            className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: "#8FF0E2", background: "rgba(6,182,212,0.14)" }}
          >
            <span className="tag-dot" style={{ background: T.teal400 }} />
            06 — КОНТАКТЫ
          </span>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-bold mt-4 mb-4 max-w-[680px] mx-auto text-white" style={{ fontFamily: "'Unbounded', sans-serif", fontSize: "clamp(26px,4vw,42px)" }}>
            Опишите задачу — обсудим сроки и стоимость в течение дня
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p className="mb-9 text-[16.5px]" style={{ color: "#94A3B8" }}>
            Отвечаем в Telegram и по почте. Первая консультация бесплатна.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="flex flex-wrap justify-center gap-3.5">
            <Btn 
              href="https://t.me/sq1der" 
              target="_blank" 
              rel="noopener noreferrer" 
              variant="primary"
            >
              <Send size={16} /> Написать в Telegram
            </Btn>
            <button
              type="button"
              onClick={() => window.location.href = "mailto:kodastudio.it@gmail.com"}
              className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-[14.5px] font-bold border transition-all hover:-translate-y-0.5 active:translate-y-0 cursor-pointer select-none"
              style={{ borderColor: "#334155", color: "#fff" }}
            >
              <Mail size={16} /> kodastudio.it@gmail.com
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}