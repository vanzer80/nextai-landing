import { ArrowRight, WifiOff, ShieldCheck, Zap } from 'lucide-react';
import { ButtonLink, Container } from '../components/ui';
import { HeroMock } from './HeroMock';
import { DEMO_HREF } from '../config';

const trustSignals = [
  { icon: WifiOff,      label: 'Funciona offline',      detail: 'sincroniza quando a conexão volta' },
  { icon: ShieldCheck,  label: 'Dados isolados',         detail: 'cada empresa enxerga só a sua operação' },
  { icon: Zap,          label: 'Ativo em uma semana',    detail: 'sem substituir o que já roda' },
] as const;

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-28 sm:pt-36">
      {/* Multi-glow background */}
      <div
        aria-hidden
        className="blueprint pointer-events-none absolute inset-0 -z-10"
        style={{ maskImage: 'radial-gradient(ellipse 80% 55% at 50% 0%, black, transparent)', opacity: 0.55 }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-5%] -z-10 size-[55rem] rounded-full blur-[130px]"
        style={{ background: 'radial-gradient(circle, color-mix(in srgb, var(--primary) 18%, transparent), transparent 70%)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[40%] -left-32 -z-10 size-[35rem] rounded-full blur-[100px]"
        style={{ background: 'radial-gradient(circle, color-mix(in srgb, var(--ai) 8%, transparent), transparent 70%)' }}
      />

      <Container className="grid items-center gap-x-12 gap-y-14 pb-24 lg:grid-cols-[54%_46%] lg:pb-32">
        <div>
          {/* Eyebrow — pill badge */}
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.15em]"
            style={{
              background: 'color-mix(in srgb, var(--primary) 10%, transparent)',
              border: '1px solid color-mix(in srgb, var(--primary) 25%, transparent)',
              color: 'var(--primary)',
            }}
          >
            <span className="pulse-dot size-1.5 rounded-full bg-primary" />
            Gestão de campo · manutenção e assistência técnica
          </div>

          {/* Headline */}
          <h1 className="mt-6 text-balance font-bold leading-[1.02] tracking-[-0.03em] text-[2.7rem] sm:text-[3.7rem]">
            A operação de campo{' '}
            <span className="text-gradient-primary">inteira em um sistema.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 max-w-[490px] text-pretty text-[1.05rem] leading-relaxed text-text-secondary">
            Ordens de serviço, reembolsos, comprovantes e aprovações — em um lugar só.
            O técnico registra pelo celular com voz e foto. A IA organiza os campos.
            O gestor aprova com trilha completa. Funciona sem sinal.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href={DEMO_HREF} variant="primary" size="lg">
              Ver demonstração da minha operação
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </ButtonLink>
            <ButtonLink href="#fluxo" variant="secondary" size="lg">
              Como funciona
            </ButtonLink>
          </div>
          <p className="mt-3 font-mono text-[11px] text-muted">
            30 min · com os seus tipos de ordem de serviço e despesa na tela
          </p>

          {/* Trust signals */}
          <ul className="mt-9 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap sm:gap-x-7 sm:gap-y-2.5">
            {trustSignals.map(({ icon: Icon, label, detail }) => (
              <li key={label} className="flex items-center gap-2 font-mono text-[11px] text-muted">
                <Icon className="size-3.5 shrink-0 text-primary/60" />
                <span className="font-medium text-text/75">{label}</span>
                <span className="hidden text-muted/55 sm:inline">— {detail}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:pl-4">
          <HeroMock />
        </div>
      </Container>

      {/* Bottom fade into next section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-28"
        style={{ background: 'linear-gradient(to top, var(--bg), transparent)' }}
      />
    </section>
  );
}
