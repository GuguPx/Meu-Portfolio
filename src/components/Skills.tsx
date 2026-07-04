import { DATA, type SkillStatus } from "../data";
import { useI18n } from "../context/LanguageContext";
import { DYNAMIC_ICONS } from "../icons";
import { TechIcon, isKnownTech } from "./icons/TechIcon";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import type { StringKey } from "../i18n";

const STATUS_STYLE: Record<SkillStatus, string> = {
  focus: "text-ok bg-ok/15",
  learning: "text-warn bg-warn/15",
  exploring: "text-info bg-info/15",
};
const STATUS_DOT: Record<SkillStatus, string> = {
  focus: "bg-ok",
  learning: "bg-warn",
  exploring: "bg-info",
};
const STATUS_KEY: Record<SkillStatus, StringKey> = {
  focus: "skills.focus",
  learning: "skills.learning",
  exploring: "skills.exploring",
};

// Legenda mostra apenas os status realmente usados nos cards.
const USED_STATUSES = [...new Set(DATA.skillGroups.map((g) => g.status))];

export function Skills() {
  const { t, pick } = useI18n();

  return (
    <section id="skills" className="py-[clamp(4rem,9vw,7rem)] bg-soft">
      <div className="container-x">
        <SectionHeading kicker={t("skills.kicker")} title={t("skills.title")} subtitle={t("skills.subtitle")} />

        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {DATA.skillGroups.map((g) => {
            const Icon = DYNAMIC_ICONS[g.icon];
            return (
              <Reveal
                key={g.icon}
                className="card relative flex flex-col p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand"
              >
                {/* Badge no canto — nunca colide com o título */}
                <span
                  className={`absolute top-5 right-5 inline-flex items-center whitespace-nowrap text-[0.68rem] font-semibold px-2 py-0.5 rounded-full ${STATUS_STYLE[g.status]}`}
                >
                  <i className={`w-1.5 h-1.5 rounded-full mr-1.5 shrink-0 ${STATUS_DOT[g.status]}`} />
                  {t(STATUS_KEY[g.status])}
                </span>

                <span className="grid place-items-center w-10 h-10 rounded-[11px] bg-brand/15 text-brand-2">
                  <Icon size={20} />
                </span>

                <h3 className="mt-3.5 font-bold text-[1.05rem] leading-snug">{pick(g.title)}</h3>
                <p className="mt-1 text-muted text-[0.84rem] leading-relaxed">{pick(g.context)}</p>

                <div className="mt-4 pt-4 border-t border-line flex flex-wrap content-start gap-1.5 flex-1">
                  {g.items.map((item) => (
                    <span key={item} className="chip inline-flex items-center gap-1.5 h-fit">
                      {isKnownTech(item) && <TechIcon name={item} size={13} className="shrink-0" />}
                      {item}
                    </span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>

        <p className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-muted text-[0.88rem] justify-center">
          {USED_STATUSES.map((s) => (
            <span key={s} className="inline-flex items-center gap-2">
              <i className={`w-2.5 h-2.5 rounded-full ${STATUS_DOT[s]}`} />
              {t(STATUS_KEY[s])}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
