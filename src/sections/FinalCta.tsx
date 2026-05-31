import { ArrowRight } from 'lucide-react';
import { ButtonLink, Container } from '../components/ui';
import { APP_URL, DEMO_HREF } from '../config';

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="pb-24 sm:pb-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-primary px-6 py-16 text-center sm:px-12">
          <div aria-hidden className="blueprint absolute inset-0 opacity-20" />
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 left-1/2 size-[28rem] -translate-x-1/2 rounded-full bg-white/10 blur-3xl"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2
              id="cta-title"
              className="text-balance text-[1.9rem] font-bold leading-[1.1] text-on-primary sm:text-[2.6rem]"
            >
              Traga uma OS e um reembolso da sua equipe. A gente fecha os dois na sua frente.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-on-primary/80">
              Sem apresentação genérica. Você mostra um caso real da sua operação e vê exatamente como
              ficaria registrado, aprovado e rastreado no sistema.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href={DEMO_HREF} variant="invert" size="lg">
                Ver o NextAI fechar uma OS e um reembolso
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </ButtonLink>
              <ButtonLink
                href={APP_URL}
                size="lg"
                className="border border-on-primary/30 bg-transparent text-on-primary hover:bg-white/10"
              >
                Já sou cliente → entrar
              </ButtonLink>
            </div>
            <p className="mt-5 font-mono text-xs text-on-primary/70">30 min · sem compromisso</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
