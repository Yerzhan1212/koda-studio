import { useEffect, useRef, useState } from "react";

// Срабатывает один раз — когда элемент первый раз появляется в зоне видимости.
// Все анимированные блоки сайта используют этот хук, поэтому тайминг везде одинаковый.
export function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return [ref, visible];
}
