/**
 * Métricas da seção de resultados.
 *
 * value: string → exibe o número na landing.
 * value: null   → exibe "—" com badge "Em coleta" (não quebra o layout em produção).
 *
 * Como coletar os dados reais:
 *  - Medir nas primeiras 4 semanas com cada cliente ativo.
 *  - Comparar o estado "antes" (extraído na reunião de onboarding) com o estado atual.
 *  - Quando ao menos 3 clientes confirmarem o número, atualizar o valor aqui.
 *
 * NUNCA publicar estimativas sem validação com clientes reais.
 */
export interface Metric {
  value: string | null;
  label: string;
  /** Instrução interna de coleta — não exibida na landing. */
  collection: string;
}

export const METRICS: Metric[] = [
  {
    value: null,
    label: 'de redução no tempo entre a despesa acontecer e o reembolso ser aprovado',
    collection:
      'Medir: média de dias entre data da despesa e data de aprovação, antes vs. depois. Fonte: relatório de reembolsos do NextAI + relato do gestor na semana 4.',
  },
  {
    value: null,
    label: 'das OS fechadas com todos os dados no mesmo dia do atendimento',
    collection:
      'Medir: (OS com status "aprovado" na mesma data de abertura) / (total de OS abertas no período). Extrair do painel Analytics > OS por dia.',
  },
  {
    value: null,
    label: 'de queda nas devoluções de reembolso por informação incompleta ou ilegível',
    collection:
      'Medir: (reembolsos devolvidos por dado faltando, mês anterior ao NextAI) vs. (mesmo indicador no 1º mês de uso). Perguntar ao financeiro na semana 6.',
  },
  {
    value: null,
    label: 'horas por semana economizadas por supervisor em consolidação de planilha',
    collection:
      'Medir via pergunta direta ao supervisor na semana 4: "Quanto tempo você gastava consolidando OS e reembolsos manualmente por semana?"',
  },
];
