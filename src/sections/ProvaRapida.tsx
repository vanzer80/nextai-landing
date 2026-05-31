import { Container } from '../components/ui';

const sectors = [
  'Manutenção industrial',
  'Facilities prediais',
  'Assistência técnica',
  'Obras e projetos',
] as const;

const stats = [
  { value: '< 2 min', label: 'para registrar uma ordem de serviço em campo' },
  { value: '100%',    label: 'offline — sincroniza quando a internet volta' },
  { value: '0 cópias', label: 'de dados entre apps — tudo em um fluxo só' },
] as const;

export function ProvaRapida() {
  return (
    <section
      aria-label="Contexto de uso"
      className="relative overflow-hidden border-y py-12"
      style={{ borderColor: 'rgba(255,255,255,0.05)', background: 'linear-gradient(180deg, rgba(59,111,246,0.04) 0%, transparent 100%)' }}
    >
      <Container>
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Left: sectors */}
          <div className="flex flex-col items-center gap-3 md:items-start">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
              Usado por equipes de
            </p>
            <div className="flex flex-wrap justify-center gap-2 md:justify-start">
              {sectors.map((s) => (
                <span
                  key={s}
                  className="rounded-full px-3.5 py-1.5 font-mono text-[11px] font-medium"
                  style={{
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'rgba(255,255,255,0.6)',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="hidden h-12 w-px md:block" style={{ background: 'rgba(255,255,255,0.06)' }} />

          {/* Right: stats */}
          <div className="flex flex-wrap justify-center gap-8 md:gap-10">
            {stats.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <p className="font-display text-[1.6rem] font-bold leading-none tracking-tight text-gradient-primary">
                  {s.value}
                </p>
                <p className="mt-1.5 max-w-[140px] text-[11px] leading-snug text-muted">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
