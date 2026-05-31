import { ArrowRight } from 'lucide-react';
import { ButtonLink, Container, Reveal, SectionTitle } from '../components/ui';
import { DEMO_HREF } from '../config';
import { OUTCOMES } from '../content/outcomes';
import { TESTIMONIALS } from '../content/testimonials';

export function Results() {
  return (
    <section id="resultados" className="py-24 sm:py-28">
      <Container>
        <SectionTitle
          eyebrow="O que muda na prática"
          title="O que os gestores percebem nas primeiras semanas de uso."
          intro="Cada demonstração mostra como essas mudanças se aplicam à sua operação — com os seus tipos de OS, as suas categorias de despesa e as suas regras de aprovação."
        />

        {/* Cards antes/depois */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2">
          {OUTCOMES.map((o, i) => (
            <Reveal
              key={o.label}
              delay={i * 70}
              className="rounded-2xl border border-border bg-card p-7"
            >
              <p className="font-mono text-[11px] uppercase tracking-wider text-primary">{o.label}</p>

              <div className="mt-4 grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-start">
                {/* Antes */}
                <div className="rounded-xl border border-border-subtle bg-surface p-4">
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-muted">Hoje</p>
                  <p className="text-sm leading-relaxed text-muted">{o.before}</p>
                </div>

                {/* Seta */}
                <div className="hidden items-center justify-center pt-8 sm:flex">
                  <ArrowRight className="size-4 shrink-0 text-muted" />
                </div>

                {/* Depois */}
                <div className="rounded-xl border border-primary/20 bg-primary/5 p-4">
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-primary">Com NextAI</p>
                  <p className="text-sm leading-relaxed text-text">{o.after}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mt-5 text-center text-sm leading-relaxed text-muted">
          Baseado no que clientes relatam nas primeiras semanas de operação.{' '}
          <a href={DEMO_HREF} className="font-medium text-primary underline-offset-4 hover:underline">
            Na demo, você vê isso com os seus dados.
          </a>
        </p>

        {/* Depoimentos */}
        <div className="mt-16 grid gap-4 lg:grid-cols-2">
          {TESTIMONIALS.map((d, i) => (
            <Reveal
              key={d.name}
              delay={i * 80}
              className="flex flex-col rounded-2xl border border-border bg-card p-7"
            >
              <p className="text-pretty text-[16px] leading-relaxed text-text">"{d.quote}"</p>
              <div className="mt-6 flex items-center gap-3 border-t border-border-subtle pt-5">
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

        {/* CTA */}
        <div className="mt-12 text-center">
          <ButtonLink href={DEMO_HREF} variant="primary" size="lg">
            Ver como ficaria na minha operação
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </ButtonLink>
          <p className="mt-3 font-mono text-[11px] text-muted">
            30 min · com os seus tipos de OS e despesa na tela
          </p>
        </div>
      </Container>
    </section>
  );
}
