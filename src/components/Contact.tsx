import { useState } from "react";
import { useForm } from "react-hook-form";
import { DATA } from "../data";
import { WEB3FORMS_KEY } from "../config";
import { useI18n } from "../context/LanguageContext";
import { IconDownload, IconGitHub, IconInstagram, IconLinkedIn, IconMail } from "../icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const stripProto = (url: string) => url.replace(/^https?:\/\//, "");

interface FormValues {
  name: string;
  email: string;
  message: string;
  botcheck: string; // honeypot anti-spam (deve ficar vazio)
}

type Note = { msg: string; ok: boolean } | null;

export function Contact() {
  const { t, lang } = useI18n();
  const { email, github, linkedin, instagram, resume } = DATA.links;
  const [note, setNote] = useState<Note>(null);

  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>({
    defaultValues: { name: "", email: "", message: "", botcheck: "" },
  });

  const onSubmit = async (data: FormValues) => {
    if (data.botcheck) return; // bot preencheu o honeypot → ignora
    setNote(null);

    // Sem chave configurada → fallback via mailto (abre o cliente de e-mail).
    if (!WEB3FORMS_KEY) {
      const subject = encodeURIComponent(`[Portfólio] Contato de ${data.name.trim()}`);
      const body = encodeURIComponent(`${data.message.trim()}\n\n— ${data.name.trim()} (${data.email.trim()})`);
      window.location.assign(`mailto:${email}?subject=${subject}&body=${body}`);
      setNote({ msg: t("form.opening"), ok: true });
      reset();
      return;
    }

    // Envio real via Web3Forms (sem backend próprio).
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `[Portfólio] Contato de ${data.name.trim()}`,
          from_name: data.name.trim(),
          name: data.name.trim(),
          email: data.email.trim(),
          message: data.message.trim(),
          botcheck: "",
        }),
      });
      const json = await res.json();
      if (json.success) {
        setNote({ msg: t("form.sent"), ok: true });
        reset();
      } else {
        setNote({ msg: t("form.error"), ok: false });
      }
    } catch {
      setNote({ msg: t("form.error"), ok: false });
    }
  };

  const fieldClass = (hasError: boolean) =>
    `w-full px-4 py-3 rounded-[10px] bg-base border text-fg text-[0.95rem] transition-colors focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/30 ${
      hasError ? "border-red-400" : "border-line"
    }`;

  const directLinks = [
    email && { href: `mailto:${email}`, label: t("label.email"), sub: email, Icon: IconMail, external: false },
    github && { href: github, label: t("label.github"), sub: stripProto(github), Icon: IconGitHub, external: true },
    linkedin && { href: linkedin, label: t("label.linkedin"), sub: stripProto(linkedin), Icon: IconLinkedIn, external: true },
    instagram && { href: instagram, label: t("label.instagram"), sub: stripProto(instagram), Icon: IconInstagram, external: true },
    // Só aparece quando houver PDF real em DATA.links.resume
    resume && { href: resume, label: t("label.resume"), sub: t("label.resumeNote"), Icon: IconDownload, external: true },
  ].filter(Boolean) as { href: string; label: string; sub: string; Icon: typeof IconMail; external: boolean }[];

  const req = lang === "en" ? "This field is required." : "Campo obrigatório.";

  return (
    <section id="contact" className="py-[clamp(4rem,9vw,7rem)] bg-soft">
      <div className="container-x">
        <SectionHeading kicker={t("contact.kicker")} title={t("contact.title")} subtitle={t("contact.subtitle")} />

        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-6 lg:gap-12 items-start">
          <Reveal>
            <form className="card p-[clamp(1.4rem,3vw,2rem)]" onSubmit={handleSubmit(onSubmit)} noValidate>
              {/* Honeypot — escondido de humanos, atrai bots */}
              <input type="checkbox" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" {...register("botcheck")} />

              <div className="mb-[1.1rem]">
                <label htmlFor="cName" className="block text-[0.88rem] font-semibold mb-1.5 text-muted">{t("contact.name")}</label>
                <input id="cName" type="text" autoComplete="name" className={fieldClass(!!errors.name)}
                       aria-invalid={!!errors.name} aria-describedby={errors.name ? "err-name" : undefined}
                       {...register("name", { required: req })} />
                {errors.name && <p id="err-name" className="mt-1 text-[0.8rem] text-red-400">{errors.name.message}</p>}
              </div>

              <div className="mb-[1.1rem]">
                <label htmlFor="cEmail" className="block text-[0.88rem] font-semibold mb-1.5 text-muted">{t("contact.email")}</label>
                <input id="cEmail" type="email" autoComplete="email" className={fieldClass(!!errors.email)}
                       aria-invalid={!!errors.email} aria-describedby={errors.email ? "err-email" : undefined}
                       {...register("email", { required: req, pattern: { value: EMAIL_RE, message: t("form.invalidEmail") } })} />
                {errors.email && <p id="err-email" className="mt-1 text-[0.8rem] text-red-400">{errors.email.message}</p>}
              </div>

              <div className="mb-[1.1rem]">
                <label htmlFor="cMessage" className="block text-[0.88rem] font-semibold mb-1.5 text-muted">{t("contact.message")}</label>
                <textarea id="cMessage" rows={5} className={`${fieldClass(!!errors.message)} resize-y`}
                          aria-invalid={!!errors.message} aria-describedby={errors.message ? "err-message" : undefined}
                          {...register("message", { required: req, minLength: { value: 10, message: t("form.tooShort") } })} />
                {errors.message && <p id="err-message" className="mt-1 text-[0.8rem] text-red-400">{errors.message.message}</p>}
              </div>

              <button type="submit" className="btn btn-primary w-full disabled:opacity-60" disabled={isSubmitting}>
                {isSubmitting ? t("form.sending") : t("contact.send")}
              </button>
              {note && (
                <p role="status" aria-live="polite" className={`mt-4 text-[0.9rem] ${note.ok ? "text-ok" : "text-red-400"}`}>
                  {note.msg}
                </p>
              )}
            </form>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-muted mb-5">{t("contact.directIntro")}</p>
            <div className="grid gap-3">
              {directLinks.map(({ href, label, sub, Icon, external }) => (
                <a key={label} href={href}
                   {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                   className="flex items-center gap-3.5 px-5 py-4 rounded-[10px] border border-line bg-card font-medium transition-all hover:border-brand hover:translate-x-1">
                  <span className="text-brand-2 shrink-0"><Icon size={22} /></span>
                  <span>{label}<small className="block text-faint text-[0.78rem] font-normal">{sub}</small></span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
