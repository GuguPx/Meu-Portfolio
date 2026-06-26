import { DATA } from "../data";
import { useI18n } from "../context/LanguageContext";
import { IconGitHub, IconLinkedIn, IconMail } from "../icons";

export function Hero() {
  const { t, pick } = useI18n();
  const { profile, links, hero } = DATA;

  const socials = [
    links.github && { href: links.github, label: "GitHub", Icon: IconGitHub, external: true },
    links.linkedin && { href: links.linkedin, label: "LinkedIn", Icon: IconLinkedIn, external: true },
    links.email && { href: `mailto:${links.email}`, label: "E-mail", Icon: IconMail, external: false },
  ].filter(Boolean) as { href: string; label: string; Icon: typeof IconGitHub; external: boolean }[];

  // Entrada escalonada via CSS (animation-delay crescente).
  let step = 0;
  const inDelay = () => ({ animationDelay: `${(step++) * 90}ms` });

  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center overflow-hidden pt-[68px]">
      {/* Fundo animado */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute -top-[8%] -right-[6%] w-[46vw] h-[46vw] max-w-[560px] max-h-[560px] rounded-full blur-[70px] opacity-55 animate-float"
             style={{ background: "radial-gradient(circle, #6366f1, transparent 65%)" }} />
        <div className="absolute -bottom-[12%] -left-[8%] w-[40vw] h-[40vw] max-w-[480px] max-h-[480px] rounded-full blur-[70px] opacity-55 animate-float-slow"
             style={{ background: "radial-gradient(circle, #22d3ee, transparent 65%)" }} />
        <div className="absolute inset-0 grid-overlay opacity-40" />
      </div>

      <div className="container-x relative z-10 flex flex-col items-center text-center">
        {profile.available && (
          <p className="hero-in inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-line bg-card text-muted text-[0.82rem] font-medium mb-6" style={inDelay()}>
            <span className="w-2 h-2 rounded-full bg-ok animate-pulse-dot shadow-[0_0_0_4px_rgba(52,211,153,0.25)]" />
            {t("hero.available")}
          </p>
        )}

        <p className="hero-in text-muted font-medium tracking-wide" style={inDelay()}>{t("hero.greeting")}</p>
        <h1 className="hero-in text-gradient text-[clamp(2.6rem,8vw,5rem)] font-extrabold leading-[1.04] tracking-tight my-1" style={inDelay()}>
          {profile.name}
        </h1>
        <h2 className="hero-in flex flex-wrap gap-x-3 gap-y-1 justify-center items-baseline text-[clamp(1.1rem,3.4vw,1.6rem)] font-semibold" style={inDelay()}>
          <span>{pick(profile.role)}</span>
          <span className="font-mono text-[0.8em] text-brand-2 font-medium">{pick(profile.focus)}</span>
        </h2>

        <p className="hero-in max-w-[620px] text-muted text-[clamp(1rem,2.4vw,1.12rem)] mt-5" style={inDelay()}>{pick(hero.tagline)}</p>

        <div className="hero-in flex flex-wrap gap-3 justify-center mt-8" style={inDelay()}>
          <a href="#projects" className="btn btn-primary">{t("hero.ctaProjects")}</a>
          <a href="#contact" className="btn btn-ghost">{t("hero.ctaContact")}</a>
        </div>

        {socials.length > 0 && (
          <div className="hero-in flex gap-2.5 mt-7" aria-label="Redes sociais" style={inDelay()}>
            {socials.map(({ href, label, Icon, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="grid place-items-center w-11 h-11 rounded-xl border border-line bg-card text-muted transition-all hover:text-fg hover:border-brand hover:-translate-y-[3px]"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        )}
      </div>

      <a href="#about" aria-label={t("hero.scroll")}
         className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 w-[26px] h-[42px] border-2 border-line rounded-[14px]">
        <span className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-2 rounded bg-brand-2 animate-scroll-dot" />
      </a>
    </section>
  );
}
