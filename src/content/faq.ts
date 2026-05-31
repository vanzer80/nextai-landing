export interface FaqItem {
  q: string;
  a: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: 'Funciona offline de verdade?',
    a: 'Sim. O técnico abre OS, preenche checklists e fotografa comprovantes sem nenhuma conexão ativa. Tudo fica salvo no aparelho e sincroniza automaticamente quando a internet volta — no subsolo, na fábrica ou em área sem cobertura. Nada se perde no caminho.',
  },
  {
    q: 'Preciso substituir o meu sistema atual de uma vez?',
    a: 'Não. A implantação começa por um processo ou uma equipe e vai expandindo conforme os resultados aparecem. Os fluxos improvisados saem gradualmente, sem interromper o que já está rodando. Você não larga nada antes de ter certeza de que o novo está funcionando.',
  },
  {
    q: 'Qual o tempo mínimo para a equipe estar usando de verdade?',
    a: 'Em média, uma semana da configuração inicial ao primeiro uso real em campo. Os técnicos aprendem a registrar OS e comprovantes em menos de uma hora — o celular já é familiar, muda só onde eles registram. Os gestores precisam de uma conversa para configurar aprovações e entender o painel.',
  },
  {
    q: 'Como ficam os dados da minha empresa?',
    a: 'Os dados de cada empresa ficam isolados em nível de banco de dados: nenhum cliente enxerga informação de outro, sem exceção. A IA processa documentos e áudios dentro do contexto da sua operação, sem compartilhar nada entre empresas.',
  },
  {
    q: 'Precisa de quantos técnicos para fazer sentido?',
    a: 'Recomendamos começar com cinco a dez pessoas para validar o fluxo e ajustar as configurações antes de expandir. A cobrança acompanha o crescimento. Não há mínimo contratual para começar — a demonstração já mostra o sistema com os seus tipos de OS e despesa reais.',
  },
  {
    q: 'Tem aplicativo para Android e iPhone?',
    a: 'O NextAI instala direto pelo navegador do celular, sem depender de aprovação de loja de aplicativos. Funciona em Android e iOS com a mesma experiência, otimizado para uso em campo — mesmo com tela suja, luva ou luz forte.',
  },
  {
    q: 'Consigo controlar quem vê e quem aprova o quê?',
    a: 'Sim. Cada perfil — técnico, gestor, financeiro, diretor — acessa apenas o que é do seu escopo. As regras de aprovação são configuradas por tipo de OS e por faixa de valor, seguindo a hierarquia que a sua empresa já pratica.',
  },
];
