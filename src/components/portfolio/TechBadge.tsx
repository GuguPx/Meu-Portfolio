import { TechIcon } from "../icons/TechIcon";

/** Chip de tecnologia/integração com ícone de marca + label (estilo `.chip`). */
export function TechBadge({ label }: { label: string }) {
  return (
    <span className="chip inline-flex items-center gap-1.5">
      <TechIcon name={label} size={14} className="shrink-0" />
      {label}
    </span>
  );
}
