/**
 * Endereços externos da landing.
 *
 * DEMO_HREF: substituir CALENDLY_URL pelo link real do Calendly (ou Cal.com) antes de
 * qualquer campanha paga. O mailto abaixo funciona como fallback enquanto o agendamento
 * online não estiver configurado — mas adiciona atrito desnecessário na conversão.
 *
 * Como criar o link Calendly:
 *  1. Criar evento "Demo NextAI — 30 min" em calendly.com
 *  2. Ativar perguntas de qualificação: empresa, tamanho da equipe, segmento
 *  3. Substituir CALENDLY_URL abaixo pela URL gerada
 */
export const CALENDLY_URL = 'https://calendly.com/nextai/demo'; // TODO: substituir pela URL real
export const MAILTO_FALLBACK =
  'mailto:contato@nextai.app?subject=Quero%20agendar%20uma%20demonstra%C3%A7%C3%A3o';

export const DEMO_HREF = CALENDLY_URL;

/** App do produto (área autenticada). Separado da landing por design. */
export const APP_URL = 'https://nextai-plataform.vercel.app/login';
