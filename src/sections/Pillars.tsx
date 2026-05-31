import { Smartphone, ShieldCheck, BarChart3 } from 'lucide-react';
import { Container, Reveal, SectionTitle } from '../components/ui';

const pillars = [
  {
    icon: Smartphone,
    title: 'Execução em campo',
    tagline: 'O técnico registra no ato. Sem depender de conexão ou de lembrar mais tarde.',
    points: [
      'A ordem de serviço é aberta no celular logo ao chegar ao local — com checklist, fotos e categoria do serviço já configurados.',
      'O comprovante é fotografado ali mesmo, antes de a nota sumir no bolso ou ficar esquecida no banco do carro.',
      'Área sem sinal no subsolo, na fábrica ou em obra? O registro fica salvo e sobe sozinho quando a conexão volta.',
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Aprovação e rastreabilidade',
    tagline: 'Cada decisão registra quem aprovou, quando e por quê. Sem precisar perguntar depois.',
    points: [
      'O reembolso chega ao gestor com valor, favorecido e categoria já extraídos da foto — nenhum dado a redigitar.',
      'Devoluções por informação incompleta caem porque o sistema avisa o técnico no campo, antes de seguir para aprovação.',
      'Na auditoria ou no desentendimento, a trilha está ali: data, responsável e histórico de cada item.',
    ],
  },
  {
    icon: BarChart3,
    title: 'Visão em tempo real',
    tagline: 'O painel mostra o que precisa de atenção — não tudo de uma vez.',
    points: [
      'A primeira tela do dia exibe quantas ordens de serviço foram abertas, quantas fecharam e quais estão paradas há mais tempo do que deveriam.',
      'SLA prestes a estourar aparece com destaque antes de virar problema e atraso no atendimento.',
      'Relatórios por equipe, unidade ou período disponíveis sem o financeiro reorganizar nenhuma planilha.',
    ],
  },
] as const;

export function Pillars() {
  return (
    <section id="pilares" className="py-24 sm:py-28">
      <Container>
        <SectionTitle
          eyebrow="Por que funciona"
          title="Três coisas que mudam quando a operação tem um lugar só."
        />

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 90}
              className="rounded-2xl border border-border bg-card p-7"
            >
              <span className="grid size-11 place-items-center rounded-xl bg-primary/10 text-primary">
                <p.icon className="size-5" />
              </span>

              <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
              <p className="mt-1.5 text-sm font-medium text-primary">{p.tagline}</p>

              <ul className="mt-5 space-y-3">
                {p.points.map((point) => (
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
