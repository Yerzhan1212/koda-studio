import { T } from "../../theme";

export default function Tag({ children, className = "" }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide ${className}`}
      style={{ fontFamily: "'JetBrains Mono', monospace", color: T.teal600, background: T.tealTint }}
    >
      <span className="tag-dot" style={{ background: T.teal400 }} />
      {children}
    </span>
  );
}
