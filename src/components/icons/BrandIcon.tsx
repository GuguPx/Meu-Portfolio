/* =============================================================================
   BrandIcon — marca pessoal de Augusto Silva.
   Monograma geométrico: um pico "A" (arquitetura / construção de sistemas) com
   travessão e um nó no ápice, dentro de um tile de cantos suaves.
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
      {/* Pico "A" + travessão */}
      <path d="M11 28.5 L20 11.5 L29 28.5" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15.4 22.6 H24.6" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" />
      {/* Nó no ápice */}
      <circle cx="20" cy="11.5" r="1.9" fill="currentColor" />
    </svg>
  );
}
