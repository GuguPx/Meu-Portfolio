import { DATA, type Project, type ProjectStatus } from "../data";
import { useI18n } from "../context/LanguageContext";
import { IconBlocks, IconCode, IconExternal } from "../icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import type { StringKey } from "../i18n";

const STATUS_STYLE: Record<ProjectStatus, string> = {
  live: "text-ok bg-ok/15",
  "in-progress": "text-info bg-info/15",
  planned: "text-warn bg-warn/15",
  future: "text-accent bg-accent/15",
};
const STATUS_KEY: Record<ProjectStatus, StringKey> = {
  live: "status.live",
  "in-progress": "status.in-progress",
  planned: "status.planned",
  future: "status.future",
};

function ProjectLink({ href, label, kind }: { href: string; label: string; kind: "repo" | "demo" }) {
  const Icon = kind === "repo" ? IconCode : IconExternal;
  if (!href) {
    return (
      <span aria-disabled="true" className="inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-muted opacity-40 cursor-not-allowed">
        <Icon size={16} />{label}
      </span>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer"
       className="inline-flex items-center gap-1.5 text-[0.85rem] font-semibold text-muted transition-colors hover:text-brand-2">
      <Icon size={16} />{label}
    </a>
  );
}

function ProjectCard({ p }: { p: Project }) {
  const { t, pick } = useI18n();
  return (
    <Reveal className="group relative flex flex-col card p-6 overflow-hidden transition-all duration-200 hover:-translate-y-1.5 hover:border-brand hover:shadow-glow">
      <span className="absolute inset-x-0 top-0 h-[3px] bg-grad opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
      <div className="flex items-start justify-between gap-4 mb-2.5">
        <h3 className="text-[1.2rem] font-bold">{pick(p.title)}</h3>
        <span className="text-brand-2 shrink-0"><IconBlocks size={26} strokeWidth={1.7} /></span>
      </div>
      <p className="text-muted text-[0.95rem] flex-1">{pick(p.description)}</p>
      <div className="flex flex-wrap gap-1.5 my-[1.1rem]">
        {p.tech.map((x) => <span key={x} className="chip">{x}</span>)}
      </div>
      <div className="flex items-center justify-between gap-4 mt-auto pt-1">
        <span className={`text-[0.72rem] font-semibold px-2.5 py-1 rounded-full ${STATUS_STYLE[p.status]}`}>
          {t(STATUS_KEY[p.status])}
        </span>
        <span className="flex gap-3.5">
          <ProjectLink href={p.links.repo} label={t("proj.repo")} kind="repo" />
          <ProjectLink href={p.links.demo} label={t("proj.demo")} kind="demo" />
        </span>
      </div>
    </Reveal>
  );
}

export function Projects() {
  const { t } = useI18n();
  return (
    <section id="projects" className="py-[clamp(4rem,9vw,7rem)]">
      <div className="container-x">
        <SectionHeading kicker={t("projects.kicker")} title={t("projects.title")} subtitle={t("projects.subtitle")} />
        <div className="grid gap-6 [grid-template-columns:repeat(auto-fill,minmax(320px,1fr))]">
          {DATA.projects.map((p) => <ProjectCard key={p.title.pt} p={p} />)}
        </div>
      </div>
    </section>
  );
}
