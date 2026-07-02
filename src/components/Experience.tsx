import { DATA } from "../data";
import { useI18n } from "../context/LanguageContext";
import { IconBriefcase, IconCheck, IconPlug } from "../icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  const { t, pick } = useI18n();

  return (
    <section id="experience" className="py-[clamp(4rem,9vw,7rem)]">
      <div className="container-x">
        <SectionHeading kicker={t("experience.kicker")} title={t("experience.title")} subtitle={t("experience.subtitle")} />

        <div className="grid gap-6 max-w-[860px]">
          {DATA.experience.map((x) => (
            <Reveal key={x.role.pt} className="card p-[clamp(1.3rem,3vw,2rem)]">
              <div className="flex items-start gap-4">
                <span className="grid place-items-center w-12 h-12 rounded-xl bg-brand/15 text-brand-2 shrink-0">
                  <IconBriefcase size={22} />
                </span>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                    <h3 className="text-[1.18rem] font-bold">{pick(x.role)}</h3>
                    {x.current && (
                      <span className="text-[0.68rem] font-semibold px-2 py-0.5 rounded-full text-info bg-info/15">
                        {t("tl.current")}
                      </span>
                    )}
                  </div>
                  <div className="text-fg/90 text-[0.94rem] font-medium mt-0.5">
                    {x.company} · <span className="text-muted">{pick(x.type)}</span>
                  </div>
                  <div className="font-mono text-[0.76rem] text-brand-2 mt-1">
                    {pick(x.period)} · {pick(x.location)}
                  </div>

                  <ul className="mt-4 space-y-2">
                    {pick(x.bullets).map((b, i) => (
                      <li key={i} className="flex gap-2.5 text-muted text-[0.93rem] leading-relaxed">
                        <span className="mt-[0.55rem] w-1.5 h-1.5 rounded-full bg-brand-2 shrink-0" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}

          {/* Diferencial de domínio: vivência com fluxos operacionais de provedores */}
          <Reveal className="card p-[clamp(1.3rem,3vw,2rem)] border-brand/30 bg-brand/5">
            <div className="flex items-start gap-4">
              <span className="grid place-items-center w-12 h-12 rounded-xl bg-brand/15 text-brand-2 shrink-0">
                <IconPlug size={22} />
              </span>
              <div className="flex-1 min-w-0">
                <h3 className="text-[1.18rem] font-bold">{t("experience.ispTitle")}</h3>
                <p className="mt-2 text-muted text-[0.93rem] leading-relaxed">{pick(DATA.ispDomain.intro)}</p>
                <ul className="mt-4 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                  {pick(DATA.ispDomain.items).map((item) => (
                    <li key={item} className="flex gap-2.5 text-muted text-[0.9rem] leading-snug">
                      <IconCheck size={16} className="mt-0.5 shrink-0 text-ok" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
