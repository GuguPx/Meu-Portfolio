import type { ReactNode } from "react";
import { useInView } from "../hooks/useInView";

type Tag = "div" | "li" | "ul" | "section" | "article" | "aside" | "p";

interface RevealProps {
  children: ReactNode;
  as?: Tag;
  className?: string;
  /** Atraso em ms para efeito escalonado. */
  delay?: number;
}

/** Revela o conteúdo ao entrar na viewport (CSS + IntersectionObserver). */
export function Reveal({ children, as: Tag = "div", className = "", delay = 0 }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <Tag
      ref={ref as React.Ref<never>}
      className={`reveal ${inView ? "is-visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
