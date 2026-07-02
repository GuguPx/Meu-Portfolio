/* =============================================================================
   GlobalBackground — brilho ambiente contínuo atrás de TODA a página.
   Fixo na viewport, quase imperceptível: dois halos suaves derivados dos tokens
   do tema (--c-glow / --c-glow-2). Sem neon, sem cor dominante.

   Performance: os halos são gradientes radiais puros (sem filter: blur — um
   blur de 130px sobre camadas fixas animadas custava caro na GPU, sobretudo
   em mobile, e era visualmente redundante sobre um gradiente já suave).
   `will-change-transform` promove cada halo a uma camada própria do compositor,
   pois eles animam transform continuamente. memo() evita re-render quando o
   idioma muda (o componente é 100% estático).
   ========================================================================== */
import { memo } from "react";

export const GlobalBackground = memo(function GlobalBackground() {
  return (
    <div
      className="app-bg fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="absolute -top-[18%] right-[-8%] w-[52vw] h-[52vw] max-w-[720px] max-h-[720px] rounded-full animate-float will-change-transform"
        style={{ background: "radial-gradient(circle, var(--c-glow), transparent 72%)" }}
      />
      <div
        className="absolute top-[44%] left-[-14%] w-[48vw] h-[48vw] max-w-[640px] max-h-[640px] rounded-full animate-float-slower will-change-transform"
        style={{ background: "radial-gradient(circle, var(--c-glow-2), transparent 72%)" }}
      />
    </div>
  );
});
