import { ArrowRight, WifiOff, ShieldCheck, Palette } from 'lucide-react';
import { ButtonLink, Container, Eyebrow } from '../components/ui';
import { HeroMock } from './HeroMock';
import { DEMO_HREF } from '../config';

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-28 sm:pt-36">
      <div aria-hidden className="blueprint pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_80%_55%_at_45%_0%,black,transparent)]" />
      <div aria-hidden className="pointer-events-none absolute -top-40 right-0 -z-10 size-[40rem] rounded-full bg-primary/10 blur-[120px]" />

      <Container className="grid items-center gap-x-10 gap-y-16 pb-24 lg:grid-cols-[57%_43%] lg:pb-32">
        <div>
          <Eyebrow>Operação de campo · manutenção</Eyebrow>

          <h1 className="mt-5 text-balance text-[2.5rem] font-bold leading-[1.04] sm:text-[3.4rem]">
            Pare de fechar a OS e o reembolso no grupo do WhatsApp.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted">
            O NextAI é onde a equipe de manutenção de campo registra a ordem de serviço e o reembolso na hora, pelo
            celular. O técnico tira a foto e fala o que fez; a IA preenche os campos; o gestor abre o painel e aprova.
            Funciona mesmo sem sinal — sincroniza quando a conexão volta.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <div>
              <ButtonLink href={DEMO_HREF} variant="primary" size="lg">
                Ver sua operação em uma demo
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </ButtonLink>
              <p className="mt-2 font-mono text-[11px] text-muted">15 min, com os seus tipos de OS e despesa na tela</p>
            </div>
            <ButtonLink href="#fluxo" variant="secondary" size="lg" className="self-start">
              Entender o fluxo
            </ButtonLink>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 font-mono text-xs text-muted">
            <li className="inline-flex items-center gap-2"><WifiOff className="size-4 text-primary" /> Funciona offline</li>
            <li className="inline-flex items-center gap-2"><ShieldCheck className="size-4 text-primary" /> Dados separados por empresa</li>
            <li className="inline-flex items-center gap-2"><Palette className="size-4 text-primary" /> Com a sua marca</li>
          </ul>
        </div>

        <div className="lg:pl-4">
          <HeroMock />
        </div>
      </Container>
    </section>
  );
}
