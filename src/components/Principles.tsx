import { useI18n } from "../context/LanguageContext";
import { PRINCIPLES } from "../practice";
import { DYNAMIC_ICONS, IconCheck } from "../icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/** "Princípios que aplico" — conceitos de engenharia de software. */
export function Principles() {
  const { t, pick } = useI18n();

  return (
    <section id="principles" className="py-[clamp(4rem,9vw,7rem)] bg-soft">
      <div className="container-x">
        <SectionHeading kicker={t("principles.kicker")} title={t("principles.title")} subtitle={t("principles.subtitle")} />

        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {PRINCIPLES.map((p, i) => {
            const Icon = DYNAMIC_ICONS[p.icon];
            return (
              <Reveal key={p.title.pt} delay={i * 50} className="card p-5 flex flex-col">
                <div className="flex items-center gap-2.5">
                  <span className="grid place-items-center w-10 h-10 rounded-xl bg-brand/15 text-brand-2 shrink-0">
                    <Icon size={20} />
                  </span>
                  <h3 className="font-bold text-[1.02rem]">{pick(p.title)}</h3>
                </div>
                <p className="mt-3 text-muted text-[0.9rem] leading-relaxed">{pick(p.description)}</p>
                <ul className="mt-3 space-y-1.5 border-t border-line pt-3">
                  {pick(p.points).map((point, j) => (
                    <li key={j} className="flex gap-2 text-[0.84rem] text-muted leading-snug">
                      <IconCheck size={15} className="mt-0.5 shrink-0 text-ok" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
