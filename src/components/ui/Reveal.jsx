import { useReveal } from "../../hooks/useReveal";
import { T } from "../../theme";

// Оборачивает любой блок разметки — при появлении на экране он плавно
// проявляется и сдвигается вверх. delay (мс) задаёт задержку для группы.
export default function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(28px)",
        transition: `opacity .8s ${T.easeOut} ${delay}ms, transform .8s ${T.easeOut} ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
