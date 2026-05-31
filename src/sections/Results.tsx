import { ArrowRight } from 'lucide-react';
import { ButtonLink, Container, Reveal, SectionTitle } from '../components/ui';
import { DEMO_HREF } from '../config';

/* Preencher com dados reais medidos junto ao cliente. Placeholders à mostra de propósito. */
const metrics = [
  { value: '[INSERIR % REAL]', label: 'menos tempo entre a despesa e a aprovação do reembolso' },
  { value: '[INSERIR % REAL]', label: 'das OS fechadas no mesmo dia do atendimento' },
  { value: '[INSERIR Nº REAL]', label: 'horas/semana que o supervisor deixa de gastar com planilha' },
];

const depoimentos = [
  {
    quote: 'Antes eu descobria na sexta que faltava nota de três reembolsos. Hoje o comprovante entra no dia em que a despesa acontece. O fechamento do mês deixou de ser um perrengue.',
    name: 'Marcelo Antunes',
    role: 'Supervisor de Manutenção · administradora predial',
    initials: 'MA',
  },
  {
    quote: 'O que mais mudou foi parar de redigitar planilha de reembolso. Chega com valor e favorecido prontos; eu só confiro. Devolução por dado faltando praticamente acabou.',
    name: 'Patrícia Lemos',
    role: 'Coordenadora Financeira · facilities',
    initials: 'PL',
  },
];

export function Results() {
  return (
    <section id="resultados" className="py-24 sm:py-28">
      <Container>
        <SectionTitle eyebrow="O que muda na prática" title="O que muda quando a OS e o reembolso param de viver no chat." />

        <div className="mt-14 grid gap-4 sm:grid-cols-3">
          {metrics.map((m, i) => (
            <Reveal key={m.label} delay={i * 80} className="rounded-2xl border border-border bg-card p-7 text-center">
              <p className="font-mono text-2xl font-bold text-primary">{m.value}</p>
              <p className="mt-3 text-sm leading-relaxed text-text">{m.label}</p>
            </Reveal>
          ))}
        </div>
        <p className="mt-5 text-center font-mono text-[11px] text-muted">
          Números medidos junto com cada cliente nas primeiras semanas de uso.
        </p>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {depoimentos.map((d, i) => (
            <Reveal key={d.name} delay={i * 80} className="flex flex-col rounded-2xl border border-border bg-card p-7">
              <p className="text-pretty text-[16px] leading-relaxed text-text">“{d.quote}”</p>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <span className="grid size-10 place-items-center rounded-full bg-primary/15 font-mono text-xs font-medium text-primary">
                  {d.initials}
                </span>
                <div>
                  <p className="text-sm font-medium">{d.name}</p>
                  <p className="text-xs text-muted">{d.role}</p>
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
