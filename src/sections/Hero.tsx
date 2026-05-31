import { useId } from 'react';
import { ArrowRight, WifiOff, ShieldCheck, Zap } from 'lucide-react';
import { ButtonLink, Container } from '../components/ui';
import { HeroMock } from './HeroMock';
import { DEMO_HREF } from '../config';

const trustSignals = [
  { icon: WifiOff,     label: 'Funciona offline',   detail: 'sincroniza quando a conexão volta' },
  { icon: ShieldCheck, label: 'Dados isolados',      detail: 'cada empresa enxerga só a sua operação' },
  { icon: Zap,         label: 'Ativo em uma semana', detail: 'sem substituir o que já roda' },
] as const;

/* Partículas ao redor da orb */
const PARTICLES = [
  { top: '14%', left: '22%', size: 2.5, delay: 0,   dur: 4.2, c: 'primary' },
  { top: '72%', left: '12%', size: 2,   delay: 1.4, dur: 5.0, c: 'ai' },
  { top: '58%', left: '82%', size: 3,   delay: 0.7, dur: 4.5, c: 'primary' },
  { top: '18%', left: '68%', size: 2,   delay: 2.1, dur: 3.8, c: 'ai' },
  { top: '88%', left: '52%', size: 2.5, delay: 0.3, dur: 4.8, c: 'primary' },
  { top: '42%', left: '6%',  size: 2,   delay: 1.8, dur: 5.2, c: 'ai' },
  { top: '8%',  left: '48%', size: 2,   delay: 1.0, dur: 4.0, c: 'primary' },
  { top: '65%', left: '38%', size: 1.5, delay: 2.4, dur: 4.6, c: 'ai' },
] as const;

function AiOrb() {
  const uid = useId().replace(/:/g, '_');

  return (
    <div className="relative size-[360px]" aria-hidden>
      {/* SVG — anéis orbitais */}
      <svg
        className="absolute inset-0 size-full"
        viewBox="0 0 340 340"
        style={{ overflow: 'visible' }}
      >
        <defs>
          {/* IDs únicos por instância para evitar colisão no DOM */}
          <filter id={`${uid}_gp`} x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <filter id={`${uid}_ga`} x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* Anel externo estático (guia sutil) */}
        <circle cx="170" cy="170" r="156" fill="none" stroke="rgba(59,111,246,0.08)" strokeWidth="1" />

        {/* Anel externo — spin com ponto luminoso */}
        {/* transformBox: view-box garante rotação ao redor do centro do SVG em todos os browsers */}
        <g className="orb-spin" style={{ transformOrigin: '170px 170px', transformBox: 'view-box' }}>
          <circle cx="170" cy="170" r="156" fill="none" stroke="rgba(59,111,246,0.28)" strokeWidth="1.5" strokeDasharray="28 955" strokeLinecap="round" />
          <circle cx="326" cy="170" r="5.5" fill="#3b6ff6" filter={`url(#${uid}_gp)`} />
          <circle cx="326" cy="170" r="3"   fill="#6896ff" />
        </g>

        {/* Anel médio — spin reverso */}
        <circle cx="170" cy="170" r="120" fill="none" stroke="rgba(47,224,206,0.06)" strokeWidth="1" />
        <g className="orb-spin-r" style={{ transformOrigin: '170px 170px', transformBox: 'view-box' }}>
          <circle cx="170" cy="170" r="120" fill="none" stroke="rgba(47,224,206,0.25)" strokeWidth="1.5" strokeDasharray="20 735" strokeLinecap="round" />
          <circle cx="170" cy="50"  r="4.5" fill="#2fe0ce" filter={`url(#${uid}_ga)`} />
          <circle cx="170" cy="50"  r="2.5" fill="#80f0e5" />
        </g>

        {/* Anel interno — spin lento */}
        <circle cx="170" cy="170" r="82" fill="none" stroke="rgba(59,111,246,0.05)" strokeWidth="1" />
        <g style={{ transformOrigin: '170px 170px', transformBox: 'view-box', animation: 'orb-spin 32s linear infinite' }}>
          <circle cx="170" cy="170" r="82" fill="none" stroke="rgba(59,111,246,0.18)" strokeWidth="1" strokeDasharray="10 504" strokeLinecap="round" />
        </g>
      </svg>

      {/* Core glow — camada desfocada */}
      <div
        className="orb-drift absolute"
        style={{
          inset: '96px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 38% 32%, color-mix(in srgb, var(--primary) 75%, transparent) 0%, color-mix(in srgb, var(--ai) 40%, transparent) 45%, transparent 70%)',
          boxShadow: '0 0 55px -5px color-mix(in srgb, var(--primary) 65%, transparent), 0 0 110px -20px color-mix(in srgb, var(--ai) 40%, transparent)',
          filter: 'blur(3px)',
        }}
      />

      {/* Core sólido central */}
      <div
        className="absolute"
        style={{
          inset: '118px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 38% 32%, color-mix(in srgb, var(--primary) 100%, white) 0%, color-mix(in srgb, var(--ai) 80%, var(--primary)) 100%)',
        }}
      />

      {/* Partículas */}
      {PARTICLES.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            top: p.top,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.c === 'primary' ? 'var(--primary)' : 'var(--ai)',
            boxShadow: p.c === 'primary' ? '0 0 7px var(--primary)' : '0 0 6px var(--ai)',
            animation: `particle-up ${p.dur}s ease-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-28 sm:pt-36">
      {/* Background: blueprint + glows */}
      <div
        aria-hidden
        className="blueprint pointer-events-none absolute inset-0 -z-10"
        style={{ maskImage: 'radial-gradient(ellipse 80% 55% at 50% 0%, black, transparent)', opacity: 0.55 }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 right-[-5%] -z-10 size-[60rem] rounded-full blur-[140px]"
        style={{ background: 'radial-gradient(circle, color-mix(in srgb, var(--primary) 16%, transparent), transparent 70%)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-[40%] -left-32 -z-10 size-[36rem] rounded-full blur-[100px]"
        style={{ background: 'radial-gradient(circle, color-mix(in srgb, var(--ai) 7%, transparent), transparent 70%)' }}
      />

      <Container className="grid items-center gap-x-12 gap-y-14 pb-24 lg:grid-cols-[52%_48%] lg:pb-32">
        {/* ── Coluna esquerda: texto ── */}
        <div>
          {/* Eyebrow pill badge */}
          <div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-mono text-[11px] font-medium uppercase tracking-[0.15em]"
            style={{
              background: 'color-mix(in srgb, var(--primary) 10%, transparent)',
              border: '1px solid color-mix(in srgb, var(--primary) 25%, transparent)',
              color: 'var(--primary)',
            }}
          >
            <span className="pulse-dot size-1.5 rounded-full bg-primary" />
            Gestão de campo · manutenção e assistência técnica
          </div>

          {/* Headline — escala progressiva para mobile legível */}
          <h1 className="mt-6 text-balance font-bold leading-[1.03] tracking-[-0.025em] text-[1.95rem] sm:text-[2.55rem] lg:text-[3.75rem] sm:tracking-[-0.03em]">
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

        {/* ── Coluna direita: Orb 3D + Dashboard ── */}
        <div className="relative overflow-x-clip lg:overflow-visible lg:pl-4">
          {/* AI Orb — background layer (só no desktop) */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 z-0 hidden items-center justify-center lg:flex"
          >
            <AiOrb />
          </div>

          {/* Dashboard — foreground layer */}
          <div className="relative z-10">
            <HeroMock />
          </div>
        </div>
      </Container>

      {/* Bottom fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32"
        style={{ background: 'linear-gradient(to top, var(--bg), transparent)' }}
      />
    </section>
  );
}
