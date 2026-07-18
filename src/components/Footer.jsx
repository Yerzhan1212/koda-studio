import { Zap } from "lucide-react";
import { T, SECTION_META } from "../theme";
import Btn from "./ui/Button";

export function Footer() {
  return (
    <footer className="py-9 border-t" style={{ borderColor: T.line, background: T.ink900 }}>
      <div className="max-w-[1180px] mx-auto px-8 flex flex-wrap items-center justify-between gap-4">
        <div className="text-[13px]" style={{ fontFamily: "'JetBrains Mono', monospace", color: "#64748B" }}>
          © 2026 KODA
        </div>
        <div className="flex gap-6 text-[13.5px]" style={{ color: "#64748B" }}>
          {SECTION_META.filter((s) => s.id !== "faq").map((s) => (
            <a key={s.id} href={`#${s.id}`} className="hover:text-white transition-colors">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function MobileCTA() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-[90] p-3 backdrop-blur-md" style={{ background: "rgba(248,250,252,0.95)", borderTop: `1px solid ${T.line}` }}>
      <Btn href="#contact" variant="primary" className="w-full justify-center">
        <Zap size={16} /> Обсудить проект
      </Btn>
    </div>
  );
}
