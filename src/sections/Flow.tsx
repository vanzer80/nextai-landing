import { Smartphone, Sparkles, ClipboardCheck, ArrowRight } from 'lucide-react';
import { ButtonLink, Container, Reveal, SectionTitle } from '../components/ui';
import { DEMO_HREF } from '../config';

const steps = [
  {
    n: '01',
    icon: Smartphone,
    title: 'O técnico captura',
    impact: 'No campo, em dois minutos, com ou sem internet.',
    points: [
      'Abre a OS, preenche o checklist do tipo de serviço e registra as fotos do local e do equipamento.',
      'Fotografa o comprovante de despesa na hora — nota fiscal, recibo ou cupom, tanto faz.',
      'Sem sinal no local? Registra normalmente; o sistema sincroniza quando a conexão volta.',
    ],
  },
  {
    n: '02',
    icon: Sparkles,
    title: 'A IA organiza',
    impact: 'O que foi fotografado e falado vira campo preenchido, sem digitação.',
    points: [
      'Da foto do recibo saem valor, favorecido, forma de pagamento e categoria — prontos para revisão.',
      'O técnico narra o que fez por voz; o relatório da OS sai estruturado e vinculado ao chamado.',
      'O sistema sinaliza quando falta informação, o comprovante está ilegível ou o valor não bate.',
    ],
  },
  {
    n: '03',
    icon: ClipboardCheck,
    title: 'O gestor decide',
    impact: 'O painel mostra o que precisa de aprovação — não uma lista interminável.',
    points: [
      'Reembolsos chegam completos: o gestor confere e aprova individualmente ou em lote, sem redigitar.',
      'A OS aparece com histórico de fotos, serviços e peças — tudo no mesmo lugar, sem juntar conversas.',
      'Cada aprovação registra quem decidiu e quando. O financeiro recebe pronto para o ERP ou planilha.',
    ],
  },
] as const;

export function Flow() {
  return (
    <section id="fluxo" className="border-y border-border bg-surface py-24 sm:py-28">
      <Container>
        <SectionTitle
          eyebrow="Como funciona"
          title="Da abertura da OS à aprovação do reembolso, no mesmo dia."
        />

        <div className="relative mt-14 grid gap-5 md:grid-cols-3">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-border-subtle to-transparent md:block"
          />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 90} className="relative rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <span className="grid size-12 place-items-center rounded-xl bg-primary text-on-primary shadow-[0_8px_24px_-8px_var(--primary)]">
                  <s.icon className="size-5" />
                </span>
                <span className="font-display text-4xl font-bold text-text/[0.08]">{s.n}</span>
              </div>
              <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
              <p className="mt-1.5 text-sm font-medium text-primary">{s.impact}</p>
              <ul className="mt-4 space-y-2.5">
                {s.points.map((point) => (
                  <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                    <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-primary/60" />
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <ButtonLink href={DEMO_HREF} variant="primary" size="lg">
            Ver esse fluxo com os seus dados
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
