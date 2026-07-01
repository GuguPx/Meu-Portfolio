import { DATA } from "../data";
import { useI18n } from "../context/LanguageContext";
import { IconGitHub, IconInstagram, IconLinkedIn, IconMail } from "../icons";

export function Hero() {
  const { t, pick } = useI18n();
  const { profile, links, hero } = DATA;

  const socials = [
    links.github && { href: links.github, label: "GitHub", Icon: IconGitHub, external: true },
    links.linkedin && { href: links.linkedin, label: "LinkedIn", Icon: IconLinkedIn, external: true },
    links.instagram && { href: links.instagram, label: "Instagram", Icon: IconInstagram, external: true },
    links.email && { href: `mailto:${links.email}`, label: "E-mail", Icon: IconMail, external: false },
  ].filter(Boolean) as { href: string; label: string; Icon: typeof IconGitHub; external: boolean }[];

  // Entrada escalonada via CSS (animation-delay crescente).
  let step = 0;
  const inDelay = () => ({ animationDelay: `${(step++) * 150}ms` });

  return (
    <section id="hero" className="relative min-h-[100svh] flex items-center overflow-hidden pt-[76px]">
      {/* Textura técnica muito sutil (os halos de acento vêm do GlobalBackground). */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <div className="absolute inset-0 grid-overlay opacity-60" />
      </div>

      <div className="container-x relative z-10 flex flex-col items-center text-center py-16">
        {profile.available && (
          <p className="hero-in inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-line bg-surface2 text-muted text-[0.82rem] font-medium mb-8" style={inDelay()}>
            <span className="w-2 h-2 rounded-full bg-ok animate-pulse-dot shadow-[0_0_0_4px_rgba(52,211,153,0.2)]" />
            {t("hero.available")}
          </p>
        )}

        <p className="hero-in text-muted font-medium tracking-wide text-[1.02rem]" style={inDelay()}>{t("hero.greeting")}</p>
        <h1 className="hero-in text-fg text-[clamp(3rem,9vw,6rem)] font-extrabold leading-[0.95] tracking-[-0.03em] mt-2 mb-4" style={inDelay()}>
          {profile.name}
        </h1>

        <h2 className="hero-in flex flex-col items-center gap-2" style={inDelay()}>
          <span className="text-[clamp(1.3rem,3.6vw,1.9rem)] font-semibold text-fg tracking-tight">{pick(profile.role)}</span>
          <span className="font-mono text-[0.8rem] sm:text-[0.86rem] text-faint tracking-[0.12em] uppercase">{pick(profile.focus)}</span>
        </h2>

        <p className="hero-in max-w-[640px] text-muted text-[clamp(1.02rem,2.4vw,1.15rem)] leading-relaxed mt-7" style={inDelay()}>{pick(hero.tagline)}</p>

        <div className="hero-in flex flex-wrap gap-3 justify-center mt-9" style={inDelay()}>
          <a href="#projects" className="btn btn-primary">{t("hero.ctaProjects")}</a>
          <a href="#contact" className="btn btn-ghost">{t("hero.ctaContact")}</a>
        </div>

        {socials.length > 0 && (
          <div className="hero-in flex gap-2.5 mt-8" aria-label="Redes sociais" style={inDelay()}>
            {socials.map(({ href, label, Icon, external }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="grid place-items-center w-11 h-11 rounded-xl border border-line bg-surface2 text-muted transition-all hover:text-fg hover:border-brand hover:-translate-y-[3px]"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        )}
      </div>

      <a href="#about" aria-label={t("hero.scroll")}
         className="absolute bottom-7 left-1/2 -translate-x-1/2 z-10 w-[26px] h-[42px] border-2 border-line-strong rounded-[14px] hidden sm:block">
        <span className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-2 rounded bg-brand animate-scroll-dot" />
      </a>
    </section>
  );
}
