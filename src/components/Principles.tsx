import { useI18n } from "../context/LanguageContext";
import { PRINCIPLES, WORK_METHOD, WORK_METHOD_INTRO } from "../practice";
import { DYNAMIC_ICONS, IconCheck } from "../icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/** "Princípios que aplico" — método de trabalho + conceitos de engenharia. */
export function Principles() {
  const { t, pick } = useI18n();

  return (
    <section id="principles" className="py-[clamp(4rem,9vw,7rem)] bg-soft">
      <div className="container-x">
        <SectionHeading kicker={t("principles.kicker")} title={t("principles.title")} subtitle={t("principles.subtitle")} />

        {/* Método de trabalho — como transformo problemas em sistemas */}
        <div className="mb-[clamp(3rem,6vw,4.5rem)]">
          <Reveal className="max-w-2xl mb-6">
            <h3 className="text-[clamp(1.3rem,3.5vw,1.8rem)] font-extrabold tracking-tight">{t("principles.methodTitle")}</h3>
            <p className="text-muted mt-2 text-[0.95rem] leading-relaxed">{pick(WORK_METHOD_INTRO)}</p>
          </Reveal>
          <ol className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {WORK_METHOD.map((step, i) => (
              <Reveal as="li" key={step.title.pt} delay={i * 50} className="card p-5 flex gap-3.5">
                <span className="grid place-items-center w-9 h-9 rounded-full bg-brand/15 text-brand-2 font-mono font-bold text-[0.9rem] shrink-0">
                  {i + 1}
                </span>
                <div className="min-w-0">
                  <h4 className="font-bold text-[0.98rem] leading-snug">{pick(step.title)}</h4>
                  <p className="mt-1 text-muted text-[0.86rem] leading-relaxed">{pick(step.text)}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

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
