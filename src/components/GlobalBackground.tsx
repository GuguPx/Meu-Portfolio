/* =============================================================================
   GlobalBackground — fundo animado contínuo atrás de TODA a página.
   Fica fixo na viewport (não preso a nenhuma seção), então as bolhas de
   gradiente flutuam suavemente enquanto o usuário rola — sem cortes secos
   entre as seções.
   ========================================================================== */
export function GlobalBackground() {
  return (
    <div
      className="app-bg fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="absolute -top-[14%] -right-[10%] w-[55vw] h-[55vw] max-w-[680px] max-h-[680px] rounded-full blur-[90px] opacity-[0.38] animate-float"
        style={{ background: "radial-gradient(circle, #6366f1, transparent 65%)" }}
      />
      <div
        className="absolute top-[30%] -left-[12%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full blur-[90px] opacity-[0.32] animate-float-slow"
        style={{ background: "radial-gradient(circle, #22d3ee, transparent 65%)" }}
      />
      <div
        className="absolute bottom-[-12%] right-[6%] w-[48vw] h-[48vw] max-w-[560px] max-h-[560px] rounded-full blur-[90px] opacity-[0.28] animate-float-slower"
        style={{ background: "radial-gradient(circle, #8b5cf6, transparent 65%)" }}
      />
    </div>
  );
}
