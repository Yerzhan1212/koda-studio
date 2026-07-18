import { T } from "../../theme";

export default function Btn({ children, variant = "primary", href = "#", className = "", ...rest }) {
  const base =
    "group/btn inline-flex items-center justify-center gap-2 rounded-md px-5 py-3 text-[14.5px] font-bold transition-all duration-200";
  const styles =
    variant === "primary"
      ? { background: T.teal400, color: "#fff" }
      : { background: "transparent", color: T.ink900, border: `1px solid ${T.line}` };

  return (
    <a
      href={href}
      className={`${base} hover:-translate-y-0.5 ${className}`}
      style={styles}
      onMouseEnter={(e) => {
        if (variant === "ghost") e.currentTarget.style.borderColor = T.teal400;
        if (variant === "primary") e.currentTarget.style.boxShadow = "0 8px 24px rgba(6,182,212,.28)";
      }}
      onMouseLeave={(e) => {
        if (variant === "ghost") e.currentTarget.style.borderColor = T.line;
        if (variant === "primary") e.currentTarget.style.boxShadow = "none";
      }}
      {...rest}
    >
      {children}
    </a>
  );
}
