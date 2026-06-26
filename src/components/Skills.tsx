import { DATA, type SkillStatus } from "../data";
import { useI18n } from "../context/LanguageContext";
import { DYNAMIC_ICONS } from "../icons";
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

export function Skills() {
  const { t, pick } = useI18n();

  return (
    <section id="skills" className="py-[clamp(4rem,9vw,7rem)] bg-soft">
      <div className="container-x">
        <SectionHeading kicker={t("skills.kicker")} title={t("skills.title")} subtitle={t("skills.subtitle")} />

        <div className="grid gap-5 [grid-template-columns:repeat(auto-fill,minmax(265px,1fr))]">
          {DATA.skillGroups.map((g) => {
            const Icon = DYNAMIC_ICONS[g.icon];
            return (
              <Reveal key={g.icon} className="card p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand">
                <div className="flex items-center justify-between mb-[1.1rem]">
                  <div className="flex items-center gap-2.5 font-bold text-[1.05rem]">
                    <span className="grid place-items-center w-10 h-10 rounded-[11px] bg-brand/15 text-brand-2">
                      <Icon size={20} />
                    </span>
                    {pick(g.title)}
                  </div>
                  <span className={`inline-flex items-center text-[0.72rem] font-semibold px-2.5 py-1 rounded-full ${STATUS_STYLE[g.status]}`}>
                    <i className={`w-[7px] h-[7px] rounded-full mr-1.5 ${STATUS_DOT[g.status]}`} />
                    {t(STATUS_KEY[g.status])}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((item) => (
                    <span key={item} className="chip">{item}</span>
                  ))}
                </div>
              </Reveal>
            );
          })}
        </div>

        <p className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-muted text-[0.88rem] justify-center">
          <span className="inline-flex items-center gap-2"><i className="w-2.5 h-2.5 rounded-full bg-ok" />{t("skills.focus")}</span>
          <span className="inline-flex items-center gap-2"><i className="w-2.5 h-2.5 rounded-full bg-warn" />{t("skills.learning")}</span>
          <span className="inline-flex items-center gap-2"><i className="w-2.5 h-2.5 rounded-full bg-info" />{t("skills.exploring")}</span>
        </p>
      </div>
    </section>
  );
}
