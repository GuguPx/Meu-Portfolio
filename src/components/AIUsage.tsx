import { useI18n } from "../context/LanguageContext";
import { AI_CHECKLIST, AI_INTRO, AI_PRACTICES, AI_SKILLS_INTRO } from "../practice";
import { DYNAMIC_ICONS } from "../icons";
import { TechIcon } from "./icons/TechIcon";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/** "Uso consciente de IA no desenvolvimento" + skills/checklists. */
export function AIUsage() {
  const { t, pick } = useI18n();

  return (
    <section id="ai" className="py-[clamp(4rem,9vw,7rem)]">
      <div className="container-x">
        <SectionHeading kicker={t("ai.kicker")} title={t("ai.title")} subtitle={t("ai.subtitle")} />

        {/* Texto-base com o glyph do Claude */}
        <Reveal className="mb-9 max-w-3xl flex gap-4 rounded-2xl border border-brand/30 bg-brand/5 p-5">
          <span className="shrink-0">
            <TechIcon name="claude" size={30} />
          </span>
          <p className="text-fg/90 text-[0.95rem] leading-relaxed">{pick(AI_INTRO)}</p>
        </Reveal>

        {/* Subtópicos do uso consciente */}
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {AI_PRACTICES.map((a, i) => {
            const Icon = DYNAMIC_ICONS[a.icon];
            return (
              <Reveal key={a.title.pt} delay={i * 50} className="card p-5">
                <span className="grid place-items-center w-10 h-10 rounded-xl bg-brand/15 text-brand-2">
                  <Icon size={20} />
                </span>
                <h3 className="mt-3 font-bold text-[1rem]">{pick(a.title)}</h3>
                <p className="mt-1.5 text-muted text-[0.88rem] leading-relaxed">{pick(a.text)}</p>
              </Reveal>
            );
          })}
        </div>

        {/* Skills e padrões reutilizáveis */}
        <div className="mt-[clamp(3rem,6vw,4.5rem)]">
          <Reveal className="max-w-2xl mb-6">
            <h3 className="text-[clamp(1.3rem,3.5vw,1.8rem)] font-extrabold tracking-tight">{t("ai.skillsTitle")}</h3>
            <p className="text-muted mt-2 text-[0.95rem] leading-relaxed">{pick(AI_SKILLS_INTRO)}</p>
          </Reveal>
          <Reveal className="card p-5 sm:p-6">
            <ul className="grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {pick(AI_CHECKLIST).map((rule, i) => (
                <li key={i} className="flex gap-2.5 text-[0.9rem] text-muted leading-snug">
                  <span className="mt-[0.55rem] w-1.5 h-1.5 rounded-full bg-brand-2 shrink-0" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
