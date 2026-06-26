import { DATA } from "../data";
import { useI18n } from "../context/LanguageContext";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const { t, pick } = useI18n();
  const { paragraphs, stats, languages } = DATA.about;

  return (
    <section id="about" className="py-[clamp(4rem,9vw,7rem)]">
      <div className="container-x">
        <SectionHeading kicker={t("about.kicker")} title={t("about.title")} />

        <div className="grid lg:grid-cols-[1.6fr_1fr] gap-8 lg:gap-16 items-start">
          <Reveal className="space-y-[1.1rem]">
            {pick(paragraphs).map((p, i) => (
              <p key={i} className={i === 0 ? "text-fg text-[1.12rem]" : "text-muted"}>
                {p}
              </p>
            ))}
          </Reveal>

          <Reveal className="grid gap-4" delay={120}>
            {stats.map((s) => (
              <div key={s.value} className="card px-6 py-5">
                <div className="text-gradient text-[2rem] font-extrabold leading-none">{s.value}</div>
                <div className="text-muted text-[0.9rem] mt-1">{pick(s.label)}</div>
              </div>
            ))}

            <div className="card px-6 py-5">
              <div className="text-[0.78rem] font-mono text-brand-2 uppercase tracking-wide mb-3">{t("about.languages")}</div>
              <ul className="grid gap-2.5">
                {languages.map((l) => (
                  <li key={l.name.pt} className="flex items-center justify-between gap-3">
                    <span className="font-semibold text-[0.95rem]">{pick(l.name)}</span>
                    <span className="text-muted text-[0.84rem]">{pick(l.level)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
