import { useEffect, useRef } from "react";

/** Barra fina no topo que indica o progresso de leitura da página.
    Performance: o transform é escrito direto no DOM (via ref) dentro de um
    requestAnimationFrame — nenhum re-render do React durante o scroll. */
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const el = document.documentElement;
      const max = el.scrollHeight - el.clientHeight;
      const p = max > 0 ? el.scrollTop / max : 0;
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={barRef}
      aria-hidden="true"
      style={{ transform: "scaleX(0)" }}
      className="fixed top-0 left-0 right-0 z-[60] h-[3px] origin-left bg-grad will-change-transform"
    />
  );
}
