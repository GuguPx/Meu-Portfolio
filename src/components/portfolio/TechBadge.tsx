/** Chip de tecnologia/integração — reutiliza o estilo `.chip` do design system. */
export function TechBadge({ label }: { label: string }) {
  return <span className="chip">{label}</span>;
}
