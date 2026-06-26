import { useEffect, useRef, useState } from "react";

const supportsIO = typeof window !== "undefined" && "IntersectionObserver" in window;

/**
 * Detecta quando um elemento entra na viewport (uma única vez).
 * Usa IntersectionObserver, que dispara mesmo com a aba em segundo plano,
 * garantindo que o conteúdo sempre apareça (robusto e verificável).
 * Sem suporte a IntersectionObserver, o conteúdo já começa visível.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: IntersectionObserverInit = { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(!supportsIO);

  useEffect(() => {
    const node = ref.current;
    if (!node || !supportsIO) return;
    const obs = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);
    obs.observe(node);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { ref, inView };
}
