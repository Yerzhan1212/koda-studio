import { useEffect, useState } from "react";
import { T } from "../theme";

const TERMINAL_LINES = [
  { p: "$ ", t: 'koda deploy --client="ваш бизнес"', cls: "" },
  { p: "", t: "✓ frontend build — react · 4.2s", cls: "ok" },
  { p: "", t: "✓ backend build — python · 1.8s", cls: "ok" },
  { p: "", t: "✓ database migrated — postgresql", cls: "ok" },
  { p: "$ ", t: "koda status", cls: "" },
  { p: "", t: "● live — koda.studio/ваш-сайт", cls: "ok" },
];

export default function Terminal() {
  const [rendered, setRendered] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let li = 0,
      ci = 0,
      timeoutId;
    const run = () => {
      if (li >= TERMINAL_LINES.length) {
        setDone(true);
        return;
      }
      const line = TERMINAL_LINES[li];
      const full = line.p + line.t;
      const typeChar = () => {
        if (ci <= full.length) {
          setRendered((prev) => {
            const next = [...prev];
            next[li] = { cls: line.cls, prompt: full.slice(0, line.p.length), text: full.slice(line.p.length, ci) };
            return next;
          });
          ci++;
          timeoutId = setTimeout(typeChar, 14 + Math.random() * 22);
        } else {
          ci = 0;
          li++;
          timeoutId = setTimeout(run, 260);
        }
      };
      typeChar();
    };
    run();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="min-h-[230px] p-5" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13.5, color: "#B7CCCA" }}>
      {rendered.map((l, i) => (
        <div key={i} className="mb-2.5">
          <span style={{ color: T.teal400 }}>{l.prompt}</span>
          <span style={{ color: l.cls === "ok" ? "#8FF0E2" : "#B7CCCA" }}>{l.text}</span>
        </div>
      ))}
      {done && <span className="term-cursor" style={{ background: T.teal400 }} />}
    </div>
  );
}