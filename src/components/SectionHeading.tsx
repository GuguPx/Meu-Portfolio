import { Reveal } from "./Reveal";

interface Props {
  kicker: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ kicker, title, subtitle }: Props) {
  return (
    <Reveal className="max-w-2xl mb-12">
      <span className="kicker">{kicker}</span>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="text-muted mt-3">{subtitle}</p>}
    </Reveal>
  );
}
