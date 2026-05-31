import { Bell, Camera, MapPin, TrendingUp, CheckCircle2, AlertTriangle, Clock } from 'lucide-react';
import { AiTag } from '../components/ui';

export function HeroMock() {
  const bars = [38, 52, 44, 67, 58, 81, 73];
  const max = Math.max(...bars);
  const dias = ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'];

  return (
    <div className="relative select-none" aria-hidden>
      {/* ── Main dashboard panel ── */}
      <div
        className="relative overflow-hidden rounded-2xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.06)]"
        style={{
          background: 'linear-gradient(160deg, #0f1829 0%, #0a1020 100%)',
          border: '1px solid rgba(255,255,255,0.07)',
          transform: 'perspective(1300px) rotateY(-9deg) rotateX(3deg)',
        }}
      >
        {/* Scan line — sweeps across the entire panel */}
        <div
          className="scan-sweep pointer-events-none absolute inset-x-0 z-20 h-px"
          style={{
            background: 'linear-gradient(to right, transparent 0%, var(--ai) 30%, rgba(255,255,255,0.8) 50%, var(--ai) 70%, transparent 100%)',
            boxShadow: '0 0 12px 2px color-mix(in srgb, var(--ai) 50%, transparent)',
          }}
        />

        {/* Window chrome */}
        <div
          className="flex items-center gap-3 px-4 py-3"
          style={{ background: 'rgba(255,255,255,0.025)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}
        >
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-[#ff5f57]/60" />
            <span className="size-2.5 rounded-full bg-[#ffbd2e]/60" />
            <span className="size-2.5 rounded-full bg-[#28c840]/60" />
          </div>
          <div className="flex flex-1 items-center justify-center">
            <span
              className="rounded-md px-3 py-1 font-mono text-[10px]"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.3)' }}
            >
              app.nextai.com.br
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="flex items-center gap-1.5 rounded-full px-2 py-0.5 font-mono text-[9px] font-medium text-success"
              style={{ background: 'rgba(52,199,123,0.12)' }}
            >
              <span className="pulse-dot size-1.5 rounded-full bg-success" />
              ao vivo
            </span>
            <div className="relative">
              <Bell className="size-4" style={{ color: 'rgba(255,255,255,0.25)' }} />
              <span className="absolute -right-0.5 -top-0.5 grid size-3.5 place-items-center rounded-full bg-danger font-mono text-[7px] font-bold text-white">
                3
              </span>
            </div>
          </div>
        </div>

        {/* Dashboard sub-header */}
        <div
          className="flex items-center justify-between px-5 py-3"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}
        >
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.28)' }}>
              Painel de Operação
            </p>
            <p className="text-[13px] font-semibold" style={{ color: 'rgba(255,255,255,0.75)' }}>
              Sáb, 31 Mai · 14:32
            </p>
          </div>
          <button
            className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 font-mono text-[10px]"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.35)' }}
          >
            Hoje
            <svg className="size-3" viewBox="0 0 12 12" fill="none">
              <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* KPI row */}
        <div className="grid grid-cols-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
          <KpiCell label="OS abertas"  value="24"    sub="hoje"      accent="primary" />
          {/* SLA com sonar rings reais */}
          <div className="relative">
            <span
              className="ring-expand pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-9 rounded-full"
              style={{ border: '1px solid rgba(240,64,64,0.55)' }}
            />
            <span
              className="ring-expand pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 size-9 rounded-full"
              style={{ border: '1px solid rgba(240,64,64,0.3)', animationDelay: '1.1s' }}
            />
            <KpiCell label="SLA em risco" value="3" sub="próx. 4h" accent="danger" pulsing />
          </div>
          <KpiCell label="Aprovações"  value="6"    sub="pendentes"  accent="warning" />
          <KpiCell label="Reembolsos"  value="R$8,4k" sub="+12% hoje" accent="success" />
        </div>

        {/* Chart + Queue */}
        <div className="grid grid-cols-[1fr_140px]">
          {/* Bar chart */}
          <div className="p-4" style={{ borderRight: '1px solid rgba(255,255,255,0.04)' }}>
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[11px] font-medium" style={{ color: 'rgba(255,255,255,0.45)' }}>
                Ordens de serviço · 7 dias
              </span>
              <span
                className="inline-flex items-center gap-1 rounded-full px-2 py-0.5 font-mono text-[9px] font-medium text-success"
                style={{ background: 'rgba(52,199,123,0.1)' }}
              >
                <TrendingUp className="size-2.5" /> +18%
              </span>
            </div>
            <div className="flex h-[72px] items-end gap-1">
              {bars.map((b, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-1">
                  <div
                    className="w-full rounded-t-sm transition-all"
                    style={{
                      height: `${(b / max) * 100}%`,
                      background:
                        i === 5
                          ? 'linear-gradient(to top, var(--primary), color-mix(in srgb, var(--primary) 55%, transparent))'
                          : i === 6
                          ? 'rgba(59,111,246,0.32)'
                          : 'rgba(255,255,255,0.07)',
                      boxShadow:
                        i === 5
                          ? '0 0 12px -2px color-mix(in srgb, var(--primary) 55%, transparent)'
                          : undefined,
                    }}
                  />
                  <span className="font-mono text-[8px]" style={{ color: 'rgba(255,255,255,0.18)' }}>
                    {dias[i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Priority queue */}
          <div className="p-4">
            <span className="text-[11px] font-medium" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Fila priorizada
            </span>
            <ul className="mt-2.5 space-y-2">
              {[
                { id: 'OS-2041', badge: 'SLA 1h',   accent: 'danger',  Icon: AlertTriangle },
                { id: 'OS-2039', badge: 'Em campo', accent: 'primary', Icon: Clock },
                { id: 'OS-2036', badge: 'Concluída', accent: 'success', Icon: CheckCircle2 },
              ].map((o) => (
                <li
                  key={o.id}
                  className="rounded-xl p-2.5 transition-colors"
                  style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[9px]" style={{ color: 'rgba(255,255,255,0.35)' }}>
                      {o.id}
                    </span>
                    <o.Icon
                      className="size-2.5"
                      style={{
                        color:
                          o.accent === 'danger'   ? 'var(--danger)'  :
                          o.accent === 'primary'  ? 'var(--primary)' :
                          'var(--success)',
                      }}
                    />
                  </div>
                  <span
                    className="mt-1 inline-block rounded-md px-1.5 py-0.5 font-mono text-[8px] font-medium"
                    style={{
                      background:
                        o.accent === 'danger'  ? 'rgba(240,64,64,0.12)'    :
                        o.accent === 'primary' ? 'rgba(59,111,246,0.12)'   :
                        'rgba(52,199,123,0.12)',
                      color:
                        o.accent === 'danger'  ? 'var(--danger)'  :
                        o.accent === 'primary' ? 'var(--primary)' :
                        'var(--success)',
                    }}
                  >
                    {o.badge}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Floating AI extraction card (hidden on mobile to prevent overflow) ── */}
      <div
        className="hero-float hidden sm:block absolute -bottom-10 -left-6 w-[15.5rem] rounded-2xl p-4 sm:-left-10"
        style={{
          background: 'linear-gradient(160deg, #0f1a2e 0%, #0a1020 100%)',
          border: '1px solid rgba(47,224,206,0.18)',
          boxShadow: '0 24px 60px -15px rgba(0,0,0,0.8), 0 0 0 1px rgba(47,224,206,0.07)',
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className="grid size-8 place-items-center rounded-xl"
              style={{ background: 'rgba(47,224,206,0.1)', color: 'var(--ai)' }}
            >
              <Camera className="size-4" />
            </span>
            <span className="text-[12px] font-semibold" style={{ color: 'rgba(255,255,255,0.82)' }}>
              Comprovante
            </span>
          </div>
          <AiTag />
        </div>
        <dl
          className="mt-3 space-y-1.5 rounded-xl p-2.5 font-mono text-[10px]"
          style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)' }}
        >
          <MockRow label="Valor"     value="R$ 1.240,00" highlight />
          <MockRow label="Categoria" value="Combustível" />
          <MockRow label="Pix"       value="••••@posto.br" />
        </dl>
        <div className="mt-2.5 flex items-center gap-1.5 font-mono text-[9px]" style={{ color: 'rgba(255,255,255,0.25)' }}>
          <MapPin className="size-3" style={{ color: 'rgba(47,224,206,0.5)' }} />
          Lido da foto · sem digitação
        </div>
      </div>

      {/* ── Floating approval notification (hidden on mobile) ── */}
      <div
        className="hero-float-late hidden sm:block absolute -right-4 top-10 rounded-2xl px-4 py-3 sm:-right-8"
        style={{
          background: 'linear-gradient(160deg, #0e1f14 0%, #0a1020 100%)',
          border: '1px solid rgba(52,199,123,0.2)',
          boxShadow: '0 16px 48px -12px rgba(0,0,0,0.7), 0 0 0 1px rgba(52,199,123,0.07)',
        }}
      >
        <div className="flex items-center gap-2.5">
          <span
            className="grid size-8 place-items-center rounded-xl"
            style={{ background: 'rgba(52,199,123,0.12)', color: 'var(--success)' }}
          >
            <CheckCircle2 className="size-4" />
          </span>
          <div>
            <p className="text-[11px] font-semibold" style={{ color: 'rgba(255,255,255,0.88)' }}>
              Aprovado
            </p>
            <p className="font-mono text-[9px]" style={{ color: 'rgba(255,255,255,0.3)' }}>
              Reembolso #847 · agora
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function KpiCell({
  label, value, sub, accent, pulsing,
}: {
  label: string;
  value: string;
  sub: string;
  accent: 'primary' | 'danger' | 'warning' | 'success';
  pulsing?: boolean;
}) {
  const colors = {
    primary: 'var(--primary)',
    danger:  'var(--danger)',
    warning: 'var(--warning)',
    success: 'var(--success)',
  };
  return (
    <div className="relative z-10 px-4 py-3.5" style={{ borderRight: '1px solid rgba(255,255,255,0.04)' }}>
      <p className="font-mono text-[9px] uppercase tracking-wider" style={{ color: 'rgba(255,255,255,0.3)' }}>
        {label}
      </p>
      <div className="mt-1 flex items-center gap-1.5">
        {pulsing && (
          <span className="pulse-dot size-1.5 shrink-0 rounded-full" style={{ background: colors[accent] }} />
        )}
        <p className="font-display text-[22px] font-bold leading-none" style={{ color: colors[accent] }}>
          {value}
        </p>
      </div>
      <p className="mt-0.5 font-mono text-[9px]" style={{ color: 'rgba(255,255,255,0.25)' }}>
        {sub}
      </p>
    </div>
  );
}

function MockRow({ label, value, highlight }: { label: string; value: string; highlight?: boolean }) {
  return (
    <div className="flex items-center justify-between">
      <dt style={{ color: 'rgba(255,255,255,0.3)' }}>{label}</dt>
      <dd className={highlight ? 'font-semibold' : ''} style={{ color: highlight ? 'var(--ai)' : 'rgba(255,255,255,0.65)' }}>
        {value}
      </dd>
    </div>
  );
}
