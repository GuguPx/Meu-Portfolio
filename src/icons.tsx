import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

/* Ícones com traço (stroke) -------------------------------------------- */
function Stroke({ size = 24, children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export const IconLayout = (p: IconProps) => (
  <Stroke {...p}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" /></Stroke>
);
export const IconServer = (p: IconProps) => (
  <Stroke {...p}><rect x="2" y="3" width="20" height="7" rx="2" /><rect x="2" y="14" width="20" height="7" rx="2" /><path d="M6 6.5h.01M6 17.5h.01" /></Stroke>
);
export const IconDatabase = (p: IconProps) => (
  <Stroke {...p}><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></Stroke>
);
export const IconTools = (p: IconProps) => (
  <Stroke {...p}><path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18v3h3l6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2 2.5-2.5z" /></Stroke>
);
export const IconBlocks = (p: IconProps) => (
  <Stroke {...p}><path d="M12 2l9 5v10l-9 5-9-5V7l9-5z" /><path d="M12 12l9-5M12 12v10M12 12L3 7" /></Stroke>
);
export const IconRocket = (p: IconProps) => (
  <Stroke {...p}><path d="M5 13c-1.5 1.3-2 5-2 5s3.7-.5 5-2M12 15l-3-3a16 16 0 0 1 7-9c2.5 0 4 1.5 4 4a16 16 0 0 1-9 7z" /><circle cx="14.5" cy="9.5" r="1.5" /></Stroke>
);
export const IconTrending = (p: IconProps) => (
  <Stroke {...p}><path d="M3 17l6-6 4 4 8-8M15 7h6v6" /></Stroke>
);
export const IconTarget = (p: IconProps) => (
  <Stroke {...p}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.4" /></Stroke>
);
export const IconCode = (p: IconProps) => (
  <Stroke {...p}><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></Stroke>
);
export const IconExternal = (p: IconProps) => (
  <Stroke {...p}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" /></Stroke>
);
export const IconSun = (p: IconProps) => (
  <Stroke {...p}><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></Stroke>
);
export const IconMoon = (p: IconProps) => (
  <Stroke {...p}><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" /></Stroke>
);
export const IconBriefcase = (p: IconProps) => (
  <Stroke {...p}><rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M2 13h20" /></Stroke>
);
export const IconGraduation = (p: IconProps) => (
  <Stroke {...p}><path d="M12 4 2 9l10 5 10-5-10-5zM6 11v5c0 1 2.5 2.5 6 2.5s6-1.5 6-2.5v-5M22 9v5" /></Stroke>
);

/* Ícones do portfólio técnico ----------------------------------------- */
export const IconKanban = (p: IconProps) => (
  <Stroke {...p}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18M15 3v18" /></Stroke>
);
export const IconSignature = (p: IconProps) => (
  <Stroke {...p}><path d="M3 17c3 0 3-9 6-9s3 6 5 6 2-3 4-3" /><path d="M3 21h18" /></Stroke>
);
export const IconGift = (p: IconProps) => (
  <Stroke {...p}><rect x="3" y="8" width="18" height="12" rx="1.5" /><path d="M3 12h18M12 8v12" /><path d="M7.5 8a2.5 2.5 0 0 1 0-5C10 3 12 8 12 8M16.5 8a2.5 2.5 0 0 0 0-5C14 3 12 8 12 8" /></Stroke>
);
export const IconBolt = (p: IconProps) => (
  <Stroke {...p}><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" /></Stroke>
);
export const IconGauge = (p: IconProps) => (
  <Stroke {...p}><path d="M3.5 18a9 9 0 1 1 17 0" /><path d="M12 14l4-3" /><circle cx="12" cy="14" r="1.2" /></Stroke>
);
export const IconShield = (p: IconProps) => (
  <Stroke {...p}><path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5l8-3z" /><path d="M9 12l2 2 4-4" /></Stroke>
);
export const IconRepeat = (p: IconProps) => (
  <Stroke {...p}><path d="M17 2l4 4-4 4" /><path d="M3 11v-1a4 4 0 0 1 4-4h14M7 22l-4-4 4-4" /><path d="M21 13v1a4 4 0 0 1-4 4H3" /></Stroke>
);
export const IconSparkles = (p: IconProps) => (
  <Stroke {...p}><path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3z" /><path d="M19 14l.9 2.1L22 17l-2.1.9L19 20l-.9-2.1L16 17l2.1-.9L19 14z" /></Stroke>
);
export const IconLayers = (p: IconProps) => (
  <Stroke {...p}><path d="M12 2l9 5-9 5-9-5 9-5z" /><path d="M3 12l9 5 9-5M3 17l9 5 9-5" /></Stroke>
);
export const IconPlug = (p: IconProps) => (
  <Stroke {...p}><path d="M9 2v6M15 2v6M6 8h12v3a6 6 0 0 1-12 0V8zM12 17v5" /></Stroke>
);
export const IconUsers = (p: IconProps) => (
  <Stroke {...p}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></Stroke>
);
export const IconClose = (p: IconProps) => (
  <Stroke {...p}><path d="M18 6 6 18M6 6l12 12" /></Stroke>
);
export const IconArrowRight = (p: IconProps) => (
  <Stroke {...p}><path d="M5 12h14M13 6l6 6-6 6" /></Stroke>
);
export const IconCheck = (p: IconProps) => (
  <Stroke {...p}><path d="M20 6 9 17l-5-5" /></Stroke>
);
export const IconLock = (p: IconProps) => (
  <Stroke {...p}><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V8a4 4 0 0 1 8 0v3M12 15v2" /></Stroke>
);

/* Ícones preenchidos (fill) — redes sociais ---------------------------- */
function Fill({ size = 24, children, ...props }: IconProps & { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true" {...props}>
      {children}
    </svg>
  );
}

export const IconGitHub = (p: IconProps) => (
  <Fill {...p}><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.4 7.9 10.9.6.1.8-.3.8-.6v-2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.3-1.7-1.3-1.7-1.1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.7-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.3 1.2a11.5 11.5 0 0 1 6 0C17 4.6 18 4.9 18 4.9c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6 4.6-1.5 7.9-5.8 7.9-10.9C23.5 5.7 18.3.5 12 .5z" /></Fill>
);
export const IconLinkedIn = (p: IconProps) => (
  <Fill {...p}><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" /></Fill>
);
export const IconMail = (p: IconProps) => (
  <Stroke {...p}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 6l10 7L22 6" /></Stroke>
);
export const IconInstagram = (p: IconProps) => (
  <Stroke {...p}><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><path d="M17.5 6.5h.01" /></Stroke>
);

/* Mapa dinâmico para ícones referenciados por nome em data.ts ---------- */
// eslint-disable-next-line react-refresh/only-export-components
export const DYNAMIC_ICONS = {
  layout: IconLayout,
  server: IconServer,
  database: IconDatabase,
  tools: IconTools,
  blocks: IconBlocks,
  rocket: IconRocket,
  trending: IconTrending,
  target: IconTarget,
  kanban: IconKanban,
  signature: IconSignature,
  gift: IconGift,
  bolt: IconBolt,
  gauge: IconGauge,
  shield: IconShield,
  repeat: IconRepeat,
  sparkles: IconSparkles,
  layers: IconLayers,
  plug: IconPlug,
  users: IconUsers,
  briefcase: IconBriefcase,
  lock: IconLock,
} as const;
