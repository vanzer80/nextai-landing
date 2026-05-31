import { ArrowRight } from 'lucide-react';
import { ButtonLink, Container, Reveal, SectionTitle } from '../components/ui';
import { DEMO_HREF } from '../config';
import { METRICS } from '../content/metrics';
import { TESTIMONIALS } from '../content/testimonials';

/**
 * Quando metric.value é null, exibe "—" com badge "Em coleta".
 * Nunca mostra string de placeholder crua em produção.
 */
function MetricValue({ value }: { value: string | null }) {
  if (value !== null) {
    return <p className="font-mono text-2xl font-bold text-primary">{value}</p>;
  }
  return (
    <div className="flex flex-col items-center gap-2">
      <p className="font-mono text-2xl font-bold text-text/30">—</p>
      <span className="inline-flex items-center gap-1 rounded-full border border-border bg-surface px-2.5 py-0.5 font-mono text-[10px] text-muted">
        Em coleta
      </span>
    </div>
  );
}

export function Results() {
  return (
    <section id="resultados" className="py-24 sm:py-28">
      <Container>
        <SectionTitle
          eyebrow="O que medimos com cada cliente"
          title="O que muda quando a OS e o reembolso saem das conversas e entram num sistema."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {METRICS.map((m, i) => (
            <Reveal key={m.label} delay={i * 80} className="rounded-2xl border border-border bg-card p-7 text-center">
              <MetricValue value={m.value} />
              <p className="mt-3 text-sm leading-relaxed text-text">{m.label}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-center text-sm leading-relaxed text-muted">
          Esses quatro indicadores são levantados com cada novo cliente nas primeiras semanas de uso.
          Na demonstração, mostramos como ficaria a medição na sua operação.
        </p>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {TESTIMONIALS.map((d, i) => (
            <Reveal key={d.name} delay={i * 80} className="flex flex-col rounded-2xl border border-border bg-card p-7">
              <p className="text-pretty text-[16px] leading-relaxed text-text">"{d.quote}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-primary/15 font-mono text-xs font-medium text-primary">
                  {d.initials}
                </span>
                <div>
                  <p className="text-sm font-medium">{d.name}</p>
                  <p className="text-xs text-muted">
                    {d.role} · {d.segment} · {d.teamSize}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 text-center">
          <ButtonLink href={DEMO_HREF} variant="primary" size="lg">
            Agendar uma conversa de 30 min
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
