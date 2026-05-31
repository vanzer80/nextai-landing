import { Factory, Building2, Wrench, HardHat } from 'lucide-react';
import { Container, Reveal, SectionTitle } from '../components/ui';

const sectors = [
  {
    icon: Factory,
    title: 'Manutenção industrial',
    pain: 'Histórico de equipamento espalhado, ordens de parada sem rastreabilidade e comprovantes de peça que somem antes do fechamento.',
    points: [
      'A OS abre vinculada ao ativo e ao técnico, com histórico de intervenções anteriores na mesma tela.',
      'Requisição de peças sai da OS para compras com foto, quantidade e descrição técnica — sem ligação extra.',
      'Relatório de produtividade por equipe e por equipamento fecha no sistema, sem planilha paralela.',
    ],
  },
  {
    icon: Building2,
    title: 'Facilities e serviços prediais',
    pain: 'Chamados chegando sem prioridade clara, alocação de técnico feita no improviso e comprovantes de terceiros difíceis de rastrear.',
    points: [
      'O chamado entra pelo painel ou pelo portal do cliente — com SLA configurado por tipo de serviço.',
      'O gestor vê em tempo real quais técnicos estão alocados e quais chamados ainda não foram atribuídos.',
      'Comprovantes de serviços contratados externamente entram no mesmo fluxo de aprovação interno.',
    ],
  },
  {
    icon: Wrench,
    title: 'Assistência técnica',
    pain: 'OS dependendo de ligação para atualizar status, histórico perdido e cliente sem visibilidade do prazo.',
    points: [
      'A OS registra sintoma, diagnóstico, peças e resolução em um único documento — acessível depois.',
      'O técnico finaliza com foto e assinatura eletrônica do cliente direto no celular, no local.',
      'Histórico por equipamento disponível antes de abrir um novo chamado — sem consultar papel ou e-mail.',
    ],
  },
  {
    icon: HardHat,
    title: 'Obras e projetos',
    pain: 'Diário de obra em papel ou planilha, apontamentos imprecisos e documentação espalhada em e-mails.',
    points: [
      'O encarregado registra o avanço diário por voz ou texto, vinculado à etapa e ao responsável.',
      'Despesas de material entram com foto da nota fiscal e saem prontas para o financeiro.',
      'O gestor acompanha múltiplas frentes no mesmo painel, sem ligar para cada encarregado.',
    ],
  },
] as const;

export function Sectors() {
  return (
    <section id="setores" className="border-y border-border bg-surface py-24 sm:py-28">
      <Container>
        <SectionTitle
          eyebrow="Setores"
          title="O problema é parecido. O que muda é o tipo de OS."
          intro="Conversas soltas, planilhas improvisadas e aprovações sem rastro aparecem em quase todo segmento de campo. O NextAI resolve o fluxo no contexto de cada operação."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2">
          {sectors.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 70}
              className="group rounded-2xl border border-border bg-card p-7 transition-colors hover:border-primary/40"
            >
              <div className="flex items-start gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-border bg-card text-primary transition-colors group-hover:border-primary/30 group-hover:bg-primary/5">
                  <s.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold leading-tight">{s.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{s.pain}</p>
                </div>
              </div>

              <ul className="mt-5 space-y-2.5 border-t border-border pt-5">
                {s.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                    <span aria-hidden className="mt-[7px] size-1 shrink-0 rounded-full bg-primary/60" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
