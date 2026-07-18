import { useEffect, useState } from "react";
import { T, SECTION_META } from "../theme";
import Btn from "./ui/Button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-[100] backdrop-blur-md transition-shadow duration-300"
      style={{
        background: scrolled ? "rgba(248,250,252,0.9)" : "rgba(248,250,252,0.7)",
        borderBottom: `1px solid ${T.line}`,
        boxShadow: scrolled ? "0 1px 0 rgba(15,23,42,0.04)" : "none",
      }}
    >
      <div className="max-w-[1180px] mx-auto px-8 h-[72px] flex items-center justify-between">
        <div className="font-bold text-[19px]" style={{ fontFamily: "'Unbounded', sans-serif" }}>
          KODA<span style={{ color: T.teal400 }}>.</span>
        </div>
        <nav className="hidden md:flex gap-8 text-[14.5px]" style={{ color: T.ink700 }}>
          {SECTION_META.filter((s) => s.id !== "faq").map((s) => (
            <a key={s.id} href={`#${s.id}`} className="hover:text-slate-900 transition-colors">
              {s.label}
            </a>
          ))}
        </nav>
        <Btn href="#contact" variant="primary" className="!py-2.5 !px-4 text-[13.5px]">
          Обсудить проект
        </Btn>
      </div>
    </header>
  );
}
