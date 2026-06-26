import { DATA } from "../data";
import { useI18n } from "../context/LanguageContext";

export function Footer() {
  const { t } = useI18n();
  return (
    <footer className="border-t border-line py-8">
      <div className="container-x flex flex-col sm:flex-row flex-wrap gap-4 items-center justify-between text-muted text-[0.88rem] text-center">
        <span>© {new Date().getFullYear()} {DATA.profile.name}</span>
        <span>{t("footer.made")}</span>
        <a href="#hero" className="transition-colors hover:text-brand-2">{t("footer.top")}</a>
      </div>
    </footer>
  );
}
