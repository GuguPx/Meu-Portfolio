/* =============================================================================
   BrandIcon — marca pessoal de Augusto Silva.
   Símbolo abstrato (sem letras): um grafo de nós — um hub central conectado a
   nós satélites. Representa a essência do portfólio: integrar e orquestrar
   sistemas (IXC, OPA, WhatsApp, Sheets) e automatizar fluxos.
   Cor ÚNICA via currentColor → segue o accent do tema (defina a cor no pai,
   ex.: className="text-brand"). Legível em tamanho pequeno e em qualquer tema.
   ========================================================================== */
interface BrandIconProps {
  size?: number;
  className?: string;
  title?: string;
}

export function BrandIcon({ size = 36, className, title = "Augusto Silva" }: BrandIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={className}
      role="img"
      aria-label={title}
    >
      {/* Tile */}
      <rect x="1.5" y="1.5" width="37" height="37" rx="11" fill="currentColor" fillOpacity="0.08" />
      <rect x="1.5" y="1.5" width="37" height="37" rx="11" stroke="currentColor" strokeOpacity="0.4" strokeWidth="1.5" />
      {/* Conexões hub → satélites */}
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M20 20 L20 9.5" />
        <path d="M20 20 L11 27.5" />
        <path d="M20 20 L29 27.5" />
      </g>
      {/* Nós satélites */}
      <g fill="currentColor">
        <circle cx="20" cy="9.5" r="2.4" />
        <circle cx="11" cy="27.5" r="2.4" />
        <circle cx="29" cy="27.5" r="2.4" />
      </g>
      {/* Hub central */}
      <circle cx="20" cy="20" r="3.3" fill="currentColor" />
    </svg>
  );
}
