import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { T } from "../../theme";

export default function Modal({ open, onClose, title, children }) {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (open) {
      const t = setTimeout(() => setShown(true), 10);
      document.body.style.overflow = "hidden";
      return () => {
        clearTimeout(t);
        document.body.style.overflow = "";
      };
    }
    setShown(false);
  }, [open]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-start sm:items-center justify-center overflow-y-auto p-0 sm:p-6"
      style={{ background: "rgba(15,23,42,0.55)", opacity: shown ? 1 : 0, transition: `opacity .25s ${T.easeOut}` }}
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        className="bg-white w-full sm:max-w-[640px] sm:rounded-xl shadow-2xl min-h-screen sm:min-h-0 sm:my-10"
        style={{
          transform: shown ? "translateY(0) scale(1)" : "translateY(16px) scale(.98)",
          opacity: shown ? 1 : 0,
          transition: `transform .3s ${T.easeOut}, opacity .3s ${T.easeOut}`,
        }}
      >
        <div className="flex items-center justify-between px-6 py-5 border-b" style={{ borderColor: T.line }}>
          <h3 className="font-semibold text-[18px]" style={{ fontFamily: "'Unbounded', sans-serif", color: T.ink900 }}>
            {title}
          </h3>
          <button onClick={onClose} className="p-1.5 rounded-md hover:bg-slate-100 transition-colors" aria-label="Закрыть">
            <X size={20} style={{ color: T.ink500 }} />
          </button>
        </div>
        <div className="px-6 py-6">{children}</div>
      </div>
    </div>
  );
}