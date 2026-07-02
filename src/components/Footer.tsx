import { DATA } from "../data";
import { useI18n } from "../context/LanguageContext";
import { IconGitHub, IconInstagram, IconLinkedIn, IconMail } from "../icons";

export function Footer() {
  const { t } = useI18n();
  const { github, linkedin, instagram, email } = DATA.links;

  const socials = [
    github && { href: github, label: "GitHub", Icon: IconGitHub },
    linkedin && { href: linkedin, label: "LinkedIn", Icon: IconLinkedIn },
    instagram && { href: instagram, label: "Instagram", Icon: IconInstagram },
    email && { href: `mailto:${email}`, label: "E-mail", Icon: IconMail },
  ].filter(Boolean) as { href: string; label: string; Icon: typeof IconGitHub }[];

  return (
    <footer className="border-t border-line py-8">
      <div className="container-x flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-between text-muted text-[0.88rem] text-center">
        <span>© {new Date().getFullYear()} {DATA.profile.name}</span>

        {/* Última chance de contato — repete os canais principais */}
        <span className="flex items-center gap-1.5">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="grid place-items-center w-9 h-9 rounded-lg text-muted transition-colors hover:text-fg hover:bg-card"
            >
              <Icon size={17} />
            </a>
          ))}
        </span>

        <span>{t("footer.made")}</span>
        <a href="#hero" className="transition-colors hover:text-brand-2">{t("footer.top")}</a>
      </div>
    </footer>
  );
}
