import { Receipt, LayoutDashboard, Mic, ArrowRight } from 'lucide-react';
import { Container, Reveal, SectionTitle, AiTag } from '../components/ui';

/* ─── Mini dashboard para o card do gestor ─── */
function GestorVisual() {
  const kpis: { label: string; value: string; color: string; pulse?: boolean }[] = [
    { label: 'OS abertas', value: '24', color: 'var(--primary)' },
    { label: 'SLA risco',  value: '3',  color: 'var(--danger)',  pulse: true },
    { label: 'Aprovações', value: '6',  color: 'var(--success)' },
  ];

  const teams = [
    { status: 'success', label: 'Equipe A' },
    { status: 'success', label: 'Equipe B' },
    { status: 'warning', label: 'Equipe C — sem OS' },
  ] as const;

  return (
    <div
      className="mt-5 overflow-hidden rounded-xl"
      style={{ background: 'rgba(5,10,20,0.65)', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      {/* KPI mini row */}
      <div className="grid grid-cols-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        {kpis.map((k) => (
          <div
            key={k.label}
            className="px-3 py-2.5"
            style={{ borderRight: '1px solid rgba(255,255,255,0.04)' }}
          >
            <p className="font-mono text-[8px] uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.28)' }}>
              {k.label}
            </p>
            <div className="mt-0.5 flex items-center gap-1.5">
              {k.pulse && (
                <span className="pulse-dot size-1.5 shrink-0 rounded-full" style={{ background: k.color }} />
              )}
              <p className="font-display text-[18px] font-bold leading-none" style={{ color: k.color }}>
                {k.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Team status row */}
      <div className="flex items-center gap-3 px-3 py-2.5">
        <span className="font-mono text-[8px] uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.22)' }}>
          Equipes em campo
        </span>
        <div className="flex gap-2">
          {teams.map((t) => (
            <div key={t.label} className="flex items-center gap-1">
              <span
                className="pulse-dot size-2 rounded-full"
                style={{ background: t.status === 'success' ? 'var(--success)' : 'var(--warning)' }}
              />
            </div>
          ))}
        </div>
        <span className="ml-auto font-mono text-[8px]" style={{ color: 'rgba(255,255,255,0.18)' }}>
          ao vivo
        </span>
      </div>
    </div>
  );
}

/* ─── Receipt OCR scan para o card do comprovante ─── */
function ReceiptVisual() {
  const lines = [75, 55, 90, 40, 65, 48, 80, 35] as const;
  const fields = [
    { k: 'Valor',    v: 'R$ 1.240,00', hi: true },
    { k: 'Cat',      v: 'Combustível', hi: false },
    { k: 'Pix',      v: '••@posto.br', hi: false },
  ] as const;

  return (
    <div
      className="relative mt-4 overflow-hidden rounded-xl"
      style={{
        background: 'rgba(5,10,20,0.65)',
        border: '1px solid rgba(255,255,255,0.06)',
        height: '108px',
      }}
    >
      {/* Receipt lines */}
      <div className="absolute left-0 top-0 flex h-full w-[46%] flex-col justify-center gap-1.5 px-3 py-3">
        {lines.map((w, i) => (
          <div
            key={i}
            className="rounded-full"
            style={{
              height: '3px',
              width: `${w}%`,
              background:
                i === 2
                  ? 'color-mix(in srgb, var(--ai) 45%, transparent)'
                  : 'rgba(255,255,255,0.07)',
            }}
          />
        ))}
      </div>

      {/* Animated scan line */}
      <div
        className="scan-sweep pointer-events-none absolute inset-x-0 z-10 h-px"
        style={{
          background: 'linear-gradient(to right, transparent, var(--ai), transparent)',
          boxShadow: '0 0 8px 1px color-mix(in srgb, var(--ai) 50%, transparent)',
        }}
      />

      {/* Divider */}
      <div
        className="absolute inset-y-0 left-[46%] w-px"
        style={{ background: 'rgba(255,255,255,0.05)' }}
      />

      {/* Extracted fields */}
      <div className="absolute right-0 top-0 flex h-full w-[54%] flex-col justify-center gap-1.5 px-3">
        <div className="mb-1 flex justify-end">
          <AiTag />
        </div>
        {fields.map((f) => (
          <div key={f.k} className="flex items-center justify-between gap-2">
            <span className="font-mono text-[8px]" style={{ color: 'rgba(255,255,255,0.28)' }}>
              {f.k}
            </span>
            <span
              className="font-mono text-[9px] font-medium"
              style={{ color: f.hi ? 'var(--ai)' : 'rgba(255,255,255,0.6)' }}
            >
              {f.v}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Waveform → estrutura para o card de voz ─── */
function VoiceVisual() {
  const heights = [0.4, 0.7, 1, 0.6, 0.9, 0.5, 0.8, 1, 0.4, 0.7, 0.9, 0.6, 1, 0.5, 0.8, 0.4] as const;
  const fields = ['Sintoma', 'Diagnóstico', 'Resolução'] as const;

  return (
    <div
      className="mt-4 flex items-center gap-3 rounded-xl px-3 py-3"
      style={{ background: 'rgba(5,10,20,0.65)', border: '1px solid rgba(255,255,255,0.06)' }}
    >
      {/* Audio waveform */}
      <div className="flex h-9 shrink-0 items-center gap-0.5">
        {heights.map((h, i) => (
          <div
            key={i}
            className="wave-bar w-1 rounded-full"
            style={{
              height: '100%',
              background: `linear-gradient(to top, var(--primary), color-mix(in srgb, var(--primary) 40%, transparent))`,
              transformOrigin: 'center',
              animationDelay: `${i * 0.055}s`,
              animationDuration: `${0.6 + (i % 5) * 0.08}s`,
              transform: `scaleY(${h})`,
              opacity: 0.75,
            }}
          />
        ))}
      </div>

      {/* Arrow */}
      <ArrowRight className="size-4 shrink-0" style={{ color: 'rgba(255,255,255,0.2)' }} />

      {/* Structured output */}
      <div className="flex flex-1 flex-col gap-1.5">
        {fields.map((f, i) => (
          <div key={f} className="flex items-center gap-2">
            <div
              className="h-0.5 flex-1 rounded-full"
              style={{
                background: `color-mix(in srgb, var(--ai) ${30 + i * 8}%, transparent)`,
              }}
            />
            <span className="shrink-0 font-mono text-[8px]" style={{ color: 'rgba(255,255,255,0.3)' }}>
              {f}
            </span>
          </div>
        ))}
        <div className="mt-0.5 flex justify-end">
          <AiTag>Estruturado por IA</AiTag>
        </div>
      </div>
    </div>
  );
}

/* ─── AiStories principal ─── */
export function AiStories() {
  return (
    <section id="ia" className="py-24 sm:py-28">
      <Container>
        <SectionTitle
          ai
          eyebrow="A IA no meio do caminho"
          title="A IA faz o trabalho pesado. Você só decide."
          intro="Sem botão de 'ativar IA'. Sem tela especial. Ela entra onde o trabalho manual aparece."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          {/* ── Card 1: Gestor (featured) ── */}
          <Reveal delay={0} className="lg:col-span-2 lg:row-span-2">
            <div
              className="group relative h-full overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-0.5"
              style={{
                background: 'linear-gradient(160deg, color-mix(in srgb, var(--ai) 7%, var(--card)) 0%, var(--card) 60%)',
                border: '1px solid color-mix(in srgb, var(--ai) 18%, transparent)',
                boxShadow: '0 20px 60px -20px color-mix(in srgb, var(--ai) 12%, transparent)',
              }}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full blur-[80px]"
                style={{ background: 'color-mix(in srgb, var(--ai) 8%, transparent)' }}
              />
              <div className="relative">
                <span
                  className="grid size-11 place-items-center rounded-xl transition-all duration-300 group-hover:scale-105"
                  style={{ background: 'color-mix(in srgb, var(--ai) 12%, transparent)', color: 'var(--ai)' }}
                >
                  <LayoutDashboard className="size-5" />
                </span>
                <p className="mt-5 font-mono text-[11px] uppercase tracking-wider" style={{ color: 'var(--ai)' }}>
                  A manhã do gestor
                </p>
                <p className="mt-2 text-pretty text-[15px] leading-relaxed text-text">
                  8h. O gestor abre o painel antes do café. Duas equipes sem OS, uma com SLA estourando.
                  Em vez de perguntar no grupo, ele já sabe onde está o problema — e resolve.
                </p>
                <GestorVisual />
              </div>
            </div>
          </Reveal>

          {/* ── Card 2: Comprovante ── */}
          <Reveal delay={90}>
            <div
              className="group relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              <span
                className="grid size-10 place-items-center rounded-xl transition-all duration-300 group-hover:scale-105"
                style={{ background: 'color-mix(in srgb, var(--ai) 12%, transparent)', color: 'var(--ai)' }}
              >
                <Receipt className="size-4.5" />
              </span>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-wider" style={{ color: 'var(--ai)' }}>
                O comprovante
              </p>
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                O técnico fotografa o cupom. Quando guarda o celular, o reembolso já existe — valor, categoria e Pix preenchidos. Sem digitar.
              </p>
              <ReceiptVisual />
            </div>
          </Reveal>

          {/* ── Card 3: Relatório falado ── */}
          <Reveal delay={180}>
            <div
              className="group relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5"
              style={{ background: 'var(--card)', border: '1px solid var(--border)' }}
            >
              <span
                className="grid size-10 place-items-center rounded-xl transition-all duration-300 group-hover:scale-105"
                style={{ background: 'color-mix(in srgb, var(--ai) 12%, transparent)', color: 'var(--ai)' }}
              >
                <Mic className="size-4.5" />
              </span>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-wider" style={{ color: 'var(--ai)' }}>
                O relatório falado
              </p>
              <p className="mt-1.5 text-[13px] leading-relaxed text-muted">
                O técnico narra o que fez por voz. O relatório sai escrito, organizado e vinculado à ordem de serviço. Nada sobrou para digitar à noite.
              </p>
              <VoiceVisual />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
