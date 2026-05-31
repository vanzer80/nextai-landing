import { Bell, Camera, MapPin, TrendingUp } from 'lucide-react';
import { AiTag, cn } from '../components/ui';

/** Mockup do produto — UI estática em SVG/CSS, dados ilustrativos de operação. */
export function HeroMock() {
  const bars = [42, 55, 48, 70, 61, 84, 76];
  const max = Math.max(...bars);
  const dias = ['S', 'T', 'Q', 'Q', 'S', 'S', 'D'];

  return (
    <div className="relative">
      <div aria-hidden className="absolute -inset-8 -z-10 rounded-[3rem] bg-primary/15 blur-[80px]" />

      {/* Janela principal */}
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/40 [transform:perspective(1600px)_rotateY(-7deg)_rotateX(2deg)]">
        <div className="flex items-center gap-3 border-b border-border bg-card2/60 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="size-2.5 rounded-full bg-muted/30" />
            <span className="size-2.5 rounded-full bg-muted/30" />
            <span className="size-2.5 rounded-full bg-muted/30" />
          </div>
          <span className="font-mono text-[11px] text-muted">app.nextai · operação · ao vivo</span>
          <span className="ml-auto flex items-center gap-1.5 text-muted">
            <Bell className="size-4" />
            <span className="grid size-4 place-items-center rounded-full bg-alert text-[9px] font-bold text-black">3</span>
          </span>
        </div>

        <div className="grid grid-cols-3 gap-3 p-4">
          <Kpi label="OS abertas" value="24" foot="hoje" />
          <Kpi label="SLA em risco" value="3" foot="próx. 4h" tone="alert" />
          <Kpi label="A aprovar" value="R$ 8.420" foot="6 reembolsos" />

          {/* gráfico */}
          <div className="col-span-2 rounded-xl border border-border bg-card2/40 p-3.5">
            <div className="mb-3 flex items-center justify-between">
              <span className="text-xs font-medium">OS concluídas · 7 dias</span>
              <span className="inline-flex items-center gap-1 font-mono text-[10px] text-success">
                <TrendingUp className="size-3" /> +18%
              </span>
            </div>
            <div className="flex h-24 items-end gap-1.5">
              {bars.map((b, i) => (
                <div key={i} className="flex flex-1 flex-col items-center gap-1.5">
                  <div
                    className={cn('w-full rounded-sm', i === 5 ? 'bg-primary' : 'bg-primary/35')}
                    style={{ height: `${(b / max) * 100}%` }}
                  />
                  <span className="font-mono text-[9px] text-muted">{dias[i]}</span>
                </div>
              ))}
            </div>
          </div>

          {/* fila de OS */}
          <div className="rounded-xl border border-border bg-card2/40 p-3.5">
            <span className="text-xs font-medium">Fila priorizada</span>
            <ul className="mt-3 space-y-2.5">
              {[
                { id: 'OS-2041', tone: 'alert', label: 'SLA 1h' },
                { id: 'OS-2039', tone: 'primary', label: 'Em campo' },
                { id: 'OS-2036', tone: 'success', label: 'Concluída' },
              ].map((o) => (
                <li key={o.id} className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-muted">{o.id}</span>
                  <span
                    className={cn(
                      'rounded px-1.5 py-0.5 font-mono text-[9px]',
                      o.tone === 'alert' && 'bg-alert/15 text-alert',
                      o.tone === 'primary' && 'bg-primary/15 text-primary',
                      o.tone === 'success' && 'bg-success/15 text-success',
                    )}
                  >
                    {o.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Card flutuante: leitura por IA do comprovante */}
      <div className="absolute -bottom-8 -left-6 w-[16.5rem] rounded-xl border border-ai/30 bg-card p-3.5 shadow-2xl shadow-ai/10 sm:-left-10">
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-2 text-xs font-medium">
            <span className="grid size-7 place-items-center rounded-md bg-ai/15 text-ai">
              <Camera className="size-3.5" />
            </span>
            Comprovante
          </span>
          <AiTag />
        </div>
        <dl className="mt-3 space-y-1.5 font-mono text-[11px]">
          <Row k="Valor" v="R$ 1.240,00" />
          <Row k="Categoria" v="Combustível" />
          <Row k="Pix" v="••••@posto.br" />
        </dl>
        <div className="mt-2.5 flex items-center gap-1 text-[10px] text-muted">
          <MapPin className="size-3" /> Lido da foto · sem digitação
        </div>
      </div>
    </div>
  );
}

function Kpi({ label, value, foot, tone }: { label: string; value: string; foot: string; tone?: 'alert' }) {
  return (
    <div className="rounded-xl border border-border bg-card2/40 p-3.5">
      <p className="text-[11px] text-muted">{label}</p>
      <p className={cn('mt-1 font-display text-xl font-bold', tone === 'alert' && 'text-alert')}>{value}</p>
      <p className="font-mono text-[9px] text-muted">{foot}</p>
    </div>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-muted">{k}</dt>
      <dd className="text-text">{v}</dd>
    </div>
  );
}
