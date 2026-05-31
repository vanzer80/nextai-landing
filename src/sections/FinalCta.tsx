import { ArrowRight } from 'lucide-react';
import { ButtonLink, Container } from '../components/ui';
import { APP_URL, DEMO_HREF } from '../config';

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="pb-24 sm:pb-28">
      <Container>
        <div
          className="relative overflow-hidden rounded-3xl px-6 py-20 text-center sm:px-12 sm:py-24"
          style={{
            background: 'linear-gradient(160deg, #0d1729 0%, #070e1c 60%, #0a1320 100%)',
            border: '1px solid rgba(59,111,246,0.18)',
            boxShadow: '0 0 0 1px rgba(59,111,246,0.08), 0 40px 100px -30px rgba(59,111,246,0.15)',
          }}
        >
          {/* Blueprint */}
          <div aria-hidden className="blueprint absolute inset-0 opacity-25" />

          {/* Glows */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-20 left-1/2 size-[32rem] -translate-x-1/2 rounded-full blur-[100px]"
            style={{ background: 'radial-gradient(circle, color-mix(in srgb, var(--primary) 20%, transparent), transparent 70%)' }}
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-16 right-1/4 size-[20rem] rounded-full blur-[80px]"
            style={{ background: 'radial-gradient(circle, color-mix(in srgb, var(--ai) 8%, transparent), transparent 70%)' }}
          />

          <div className="relative mx-auto max-w-2xl">
            {/* Eyebrow */}
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.15em]"
              style={{
                background: 'color-mix(in srgb, var(--primary) 12%, transparent)',
                border: '1px solid color-mix(in srgb, var(--primary) 25%, transparent)',
                color: 'var(--primary)',
              }}
            >
              Demonstração real
            </div>

            <h2
              id="cta-title"
              className="text-balance text-[1.9rem] font-bold leading-[1.08] tracking-tight sm:text-[2.6rem]"
              style={{ color: 'rgba(255,255,255,0.92)' }}
            >
              Traga uma ordem de serviço e um reembolso da sua equipe.{' '}
              <span className="text-gradient-primary">A gente fecha os dois na sua frente.</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-pretty text-lg" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Sem apresentação genérica. Você mostra um caso real da sua operação e vê exatamente como
              ficaria registrado, aprovado e rastreado no sistema.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={DEMO_HREF} variant="primary" size="lg">
                Ver o NextAI fechar uma ordem de serviço e um reembolso
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </ButtonLink>
              <ButtonLink
                href={APP_URL}
                size="lg"
                className="border border-white/15 bg-transparent text-white/70 hover:border-white/25 hover:text-white/90"
              >
                Já sou cliente → entrar
              </ButtonLink>
            </div>

            <p className="mt-6 font-mono text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
              30 min · sem compromisso
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
