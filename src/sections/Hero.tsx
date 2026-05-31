import { ArrowRight, WifiOff, ShieldCheck, Palette } from 'lucide-react';
import { ButtonLink, Container, Eyebrow } from '../components/ui';
import { HeroMock } from './HeroMock';
import { DEMO_HREF } from '../config';

const trustSignals = [
  { icon: WifiOff, label: 'Funciona offline', detail: 'registra sem sinal, sobe quando a conexão volta' },
  { icon: ShieldCheck, label: 'Dados isolados por empresa', detail: 'cada operação enxerga só a sua' },
  { icon: Palette, label: 'Com a sua marca', detail: 'logo e identidade aplicados em toda a interface' },
] as const;

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-28 sm:pt-36">
      <div
        aria-hidden
        className="blueprint pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_80%_55%_at_45%_0%,black,transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 -z-10 size-[40rem] rounded-full bg-primary/10 blur-[120px]"
      />

      <Container className="grid items-center gap-x-10 gap-y-16 pb-24 lg:grid-cols-[57%_43%] lg:pb-32">
        <div>
          <Eyebrow>Gestão de campo · manutenção e assistência técnica</Eyebrow>

          <h1 className="mt-5 text-balance text-[2.5rem] font-bold leading-[1.04] sm:text-[3.4rem]">
            A operação que vive em conversas e planilhas. Agora tem um sistema.
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted">
            Ordens de serviço espalhadas em grupos, comprovantes chegando como print ou áudio,
            planilha de reembolso montada na mão toda sexta. Com o NextAI, o técnico registra
            a OS e a despesa pelo celular — com voz e foto. A IA organiza os campos. O gestor
            aprova com trilha completa. Funciona sem sinal; sincroniza quando a conexão volta.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <div>
              <ButtonLink href={DEMO_HREF} variant="primary" size="lg">
                Agendar demonstração da sua operação
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
              </ButtonLink>
              <p className="mt-2 font-mono text-[11px] text-muted">
                30 min · com os seus tipos de OS e despesa na tela
              </p>
            </div>
            <ButtonLink href="#fluxo" variant="secondary" size="lg" className="self-start">
              Ver como o fluxo funciona
            </ButtonLink>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {trustSignals.map(({ icon: Icon, label, detail }) => (
              <li key={label} className="inline-flex items-center gap-2 font-mono text-xs text-muted">
                <Icon className="size-4 shrink-0 text-primary" />
                <span>
                  <span className="font-medium text-text">{label}</span>
                  {' '}— {detail}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:pl-4">
          <HeroMock />
        </div>
      </Container>
    </section>
  );
}
