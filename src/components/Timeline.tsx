import { DATA, type TimelineStatus } from "../data";
import { useI18n } from "../context/LanguageContext";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const DOT_STYLE: Record<TimelineStatus, string> = {
  done: "border-ok bg-base",
  current: "border-brand bg-brand shadow-[0_0_0_5px_rgba(99,102,241,0.25)]",
  planned: "border-brand bg-base",
};

export function Timeline() {
  const { t, pick } = useI18n();

  return (
    <section id="timeline" className="py-[clamp(4rem,9vw,7rem)] bg-soft">
      <div className="container-x">
        <SectionHeading kicker={t("timeline.kicker")} title={t("timeline.title")} />

        <ol className="relative max-w-[760px] mx-auto pl-8">
          {/* Linha vertical */}
          <span className="absolute left-[7px] top-1.5 bottom-1.5 w-0.5 bg-gradient-to-b from-brand to-brand-2 opacity-35" />
          {DATA.timeline.map((item) => (
            <Reveal as="li" key={item.title.pt} className="relative pb-9 last:pb-0">
              <span className={`absolute -left-[31px] top-[5px] w-4 h-4 rounded-full border-[3px] ${DOT_STYLE[item.status]}`} />
              <div className="font-mono text-[0.78rem] text-brand-2">{pick(item.period)}</div>
              <h3 className="text-[1.12rem] font-bold mt-0.5 mb-1.5">
                {pick(item.title)}
                {item.status === "current" && (
                  <span className="ml-2 align-middle text-[0.68rem] font-semibold px-2 py-0.5 rounded-full text-info bg-info/15">{t("tl.current")}</span>
                )}
                {item.status === "done" && (
                  <span className="ml-2 align-middle text-[0.68rem] font-semibold px-2 py-0.5 rounded-full text-ok bg-ok/15">{t("tl.done")}</span>
                )}
              </h3>
              <p className="text-muted text-[0.94rem]">{pick(item.description)}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
