/**
 * Depoimentos da seção de resultados.
 *
 * fictional: true  → depoimento ilustrativo (situações reais de mercado, nomes fictícios).
 * fictional: false → depoimento real com autorização do cliente.
 *
 * Substituição: quando um cliente real autorizar o uso do nome e do trecho,
 * criar uma entrada com fictional: false e remover ou arquivar a equivalente fictícia.
 * Não misturar os dois tipos na mesma exibição sem indicação visual distinta.
 *
 * Os depoimentos abaixo descrevem situações documentadas em entrevistas de discovery
 * com equipes de manutenção e facilities — os nomes são fictícios.
 */
export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  segment: string;
  teamSize: string;
  initials: string;
  fictional: boolean;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'Antes eu descobria na sexta que faltavam comprovantes de três reembolsos da semana. Precisava ligar para cada técnico, esperar o print chegar e ainda montar a planilha do zero antes de mandar para o financeiro. Hoje o comprovante entra no dia da despesa, com valor e favorecido já lidos. O fechamento do mês deixou de ser um dia inteiro de trabalho.',
    name: 'Marcelo Antunes',
    role: 'Supervisor de Manutenção',
    segment: 'Administradora predial',
    teamSize: '14 técnicos em campo',
    initials: 'MA',
    fictional: true,
  },
  {
    quote:
      'O que mudou mesmo foi parar de devolver reembolso por dado faltando. Antes era rotina: valor sem favorecido, favorecido sem Pix, foto ilegível. Agora chega completo ou o sistema já avisou o técnico no campo antes de seguir para aprovação. Em três meses, as devoluções praticamente zeraram e o tempo de fechamento caiu pela metade.',
    name: 'Patrícia Lemos',
    role: 'Coordenadora Financeira',
    segment: 'Facilities corporativos',
    teamSize: '3 unidades · 2 estados',
    initials: 'PL',
    fictional: true,
  },
];
