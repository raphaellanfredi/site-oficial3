export const wa = (number: string, text: string) =>
  `https://wa.me/${number}?text=${encodeURIComponent(text)}`;

export const WA_COMERCIAL = "5511961163777";
export const WA_SUPORTE = "5521993924639";
export const WA_AFILIADOS = "5517991827713";

export const PROVE = wa(WA_COMERCIAL, "Olá! Vim pelo site e quero provar a Eva.");

export const HELP_CENTER = "https://app.evainteligencia.com.br/hc/central-de-ajuda/pt_BR";
export const PRIVACY =
  "https://app.evainteligencia.com.br/hc/central-de-ajuda/articles/1756986596-politica-de-priva";
export const TERMS =
  "https://app.evainteligencia.com.br/hc/central-de-ajuda/articles/1777938226-termos-de-servico";
export const LOGIN = "https://app.evainteligencia.com.br";
export const INSTAGRAM = "https://www.instagram.com/eva.inteligencia.art/";
export const SUPPORT_EMAIL = "suporte@evainteligencia.com.br";

export const GUARANTEE =
  "Garantia 24 horas: se a sua IA não estiver no ar em até 24 horas, a implantação é por nossa conta.";
