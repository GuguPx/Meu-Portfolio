import { useEffect, useRef, useState } from "react";

const supportsIO = typeof window !== "undefined" && "IntersectionObserver" in window;

/* Observer ÚNICO compartilhado por todos os elementos revelados.
   Antes, cada <Reveal> criava seu próprio IntersectionObserver (dezenas de
   instâncias com os cards do portfólio); agora todos registram o alvo num
   Map e um só observer notifica cada um uma única vez. */
type RevealCallback = () => void;
const targets = new Map<Element, RevealCallback>();
let sharedObserver: IntersectionObserver | null = null;

function observe(el: Element, cb: RevealCallback) {
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const notify = targets.get(entry.target);
          if (notify) {
            targets.delete(entry.target);
            sharedObserver!.unobserve(entry.target);
            notify();
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
  }
  targets.set(el, cb);
  sharedObserver.observe(el);
}

function unobserve(el: Element) {
  targets.delete(el);
  sharedObserver?.unobserve(el);
}

/**
 * Detecta quando um elemento entra na viewport (uma única vez).
 * Sem suporte a IntersectionObserver, o conteúdo já começa visível —
 * o conteúdo nunca fica preso invisível.
 */
export function useInView<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(!supportsIO);

  useEffect(() => {
    const node = ref.current;
    if (!node || !supportsIO) return;
    observe(node, () => setInView(true));
    return () => unobserve(node);
  }, []);

  return { ref, inView };
}
