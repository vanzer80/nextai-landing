import { Smartphone, Sparkles, ClipboardCheck, ArrowRight } from 'lucide-react';
import { ButtonLink, Container, Reveal, SectionTitle } from '../components/ui';
import { DEMO_HREF } from '../config';

const steps = [
  {
    n: '01',
    icon: Smartphone,
    title: 'No campo, o técnico registra',
    impact: 'O serviço e a despesa entram na hora, pelo celular — com ou sem sinal.',
    points: [
      'Abre a OS, marca o checklist do tipo de serviço e tira as fotos.',
      'Fotografa o comprovante ali mesmo, antes de perder a nota.',
      'Sem sinal no subsolo? Registra offline; sobe sozinho quando sai.',
    ],
  },
  {
    n: '02',
    icon: Sparkles,
    title: 'A IA organiza',
    impact: 'O que o técnico fotografou e falou vira campo preenchido.',
    points: [
      'Da foto do recibo saem valor, favorecido, Pix e categoria.',
      'Do que ele ditou sai o relatório da OS, já estruturado.',
      'Avisa quando falta nota, valor ou a foto está ilegível.',
    ],
  },
  {
    n: '03',
    icon: ClipboardCheck,
    title: 'No escritório, o gestor aprova',
    impact: 'O painel mostra o que precisa de decisão, não tudo de uma vez.',
    points: [
      'O reembolso chega pronto: confere e aprova, em lote se quiser.',
      'Cada aprovação registra quem decidiu e quando.',
      'O financeiro recebe sem redigitar planilha; o mês fecha sem caça ao comprovante.',
    ],
  },
];

export function Flow() {
  return (
    <section id="fluxo" className="border-y border-border bg-surface py-24 sm:py-28">
      <Container>
        <SectionTitle eyebrow="Como funciona" title="Da OS aberta ao reembolso aprovado, no mesmo dia." />

        <div className="relative mt-14 grid gap-5 md:grid-cols-3">
          <div
            aria-hidden
            className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block"
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
                {s.points.map((p) => (
                  <li key={p} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                    <span aria-hidden className="mt-2 size-1 shrink-0 rounded-full bg-primary/60" />
                    {p}
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
