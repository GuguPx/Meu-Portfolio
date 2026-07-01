/* Configuração de runtime lida de variáveis de ambiente (Vite).
   Defina em um arquivo .env (veja .env.example). */

// Chave do Web3Forms (https://web3forms.com — grátis). Sem ela, o formulário
// usa o fallback via mailto. Cole sua "Access Key" em .env como VITE_WEB3FORMS_KEY.
export const WEB3FORMS_KEY: string = import.meta.env.VITE_WEB3FORMS_KEY ?? "";

// URL pública do site (usada em mensagens; meta tags ficam no index.html).
export const SITE_URL: string = import.meta.env.VITE_SITE_URL ?? "https://portfolioaugusto.vercel.app";
