/**
 * Outcomes da seção de resultados.
 *
 * Formato antes/depois — específico o suficiente para ser crível,
 * sem depender de número que ainda não foi medido.
 *
 * Quando dados reais estiverem disponíveis (semanas 4–6 com clientes),
 * adicionar a propriedade `stat` (ex: "47% menos tempo") e atualizar
 * Results.tsx para exibi-la como destaque acima do texto.
 */
export interface Outcome {
  before: string;
  after: string;
  label: string;
}

export const OUTCOMES: Outcome[] = [
  {
    label: 'Reembolso',
    before: 'O comprovante chega como print ou áudio dias depois — às vezes na sexta, às vezes nunca.',
    after: 'O técnico fotografa no campo; o reembolso existe com valor, favorecido e categoria antes de ele guardar o celular.',
  },
  {
    label: 'Status da OS',
    before: '"Alguém me manda o status da OS do João?" — no grupo, sem resposta rápida.',
    after: 'O painel mostra em tempo real quais OS fecharam, quais estão paradas e quais estão com prazo estourando.',
  },
  {
    label: 'Fechamento do mês',
    before: 'Sexta à tarde caçando nota de cada técnico, remontando planilha, esperando print chegar.',
    after: 'Os dados já estão registrados ao longo da semana. O fechamento vira conferência, não busca.',
  },
  {
    label: 'Rastreabilidade',
    before: '"Esse reembolso de R$ 1.240 foi aprovado por quem?" — ninguém sabe responder com certeza.',
    after: 'Cada aprovação registra nome, cargo, data e hora. A resposta está no sistema, não na memória de alguém.',
  },
];
