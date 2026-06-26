import { DATA } from "../data";
import { useI18n } from "../context/LanguageContext";
import { DYNAMIC_ICONS } from "../icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Goals() {
  const { t, pick } = useI18n();

  return (
    <section id="goals" className="py-[clamp(4rem,9vw,7rem)]">
      <div className="container-x">
        <SectionHeading kicker={t("goals.kicker")} title={t("goals.title")} />

        <div className="grid gap-6 [grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]">
          {DATA.goals.map((g, i) => {
            const Icon = DYNAMIC_ICONS[g.icon];
            return (
              <Reveal key={g.icon} delay={i * 90} className="card p-7 transition-all duration-200 hover:-translate-y-1 hover:border-brand">
                <div className="grid place-items-center w-[46px] h-[46px] rounded-xl bg-grad text-white mb-[1.1rem]">
                  <Icon size={22} />
                </div>
                <h3 className="text-[1.2rem] font-bold">{pick(g.term)}</h3>
                <p className="font-mono text-[0.78rem] text-brand-2 mb-4">{pick(g.horizon)}</p>
                <ul className="space-y-2.5">
                  {pick(g.items).map((item) => (
                    <li key={item} className="relative pl-6 text-muted text-[0.92rem]">
                      <span className="absolute left-0 top-[0.55em] w-[7px] h-[7px] rotate-45 bg-brand-2" />
                      {item}
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
