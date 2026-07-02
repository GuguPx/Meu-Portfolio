import { useEffect, useState } from "react";

/** Observa as seções e retorna o id da que está ativa na viewport.
    O efeito depende de uma chave string (join) — não da identidade do array —
    para que um array inline criado a cada render não recrie o observer. */
export function useScrollSpy(ids: string[]): string {
  const [active, setActive] = useState<string>(ids[0] ?? "");
  const key = ids.join(",");

  useEffect(() => {
    const sections = key
      .split(",")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [key]);

  return active;
}
