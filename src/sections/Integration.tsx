import { Database, FileSpreadsheet, BarChart3, Smartphone, Check } from 'lucide-react';
import { Container, Eyebrow } from '../components/ui';

const bullets = [
  { k: 'Começa com uma equipe', v: 'e expande quando fizer sentido' },
  { k: 'Importa o que você já tem', v: 'clientes, equipamentos e histórico' },
  { k: 'Treino curto', v: 'foto e voz para o técnico; uma conversa com os gestores' },
];

export function Integration() {
  return (
    <section id="implantacao" className="py-24 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <Eyebrow>Conecta com o que você já usa</Eyebrow>
          <h2 className="mt-4 text-balance text-[1.9rem] font-bold leading-[1.1] sm:text-[2.4rem]">
            Você não larga o que já roda. Você para de digitar duas vezes.
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted">
            <p>
              O financeiro continua no ERP e a diretoria continua no BI. O NextAI manda os dados de OS e reembolso
              prontos para esses dois — em PDF, Excel ou por integração, conforme o caso. Ninguém precisa abandonar o
              sistema atual para parar de copiar planilha.
            </p>
            <p>
              A entrada também é por partes. Começa com uma equipe, com os seus tipos de OS e as suas categorias de
              despesa já configurados. Quando essa frente está rodando redonda, entra a próxima. A saída do WhatsApp
              acontece equipe por equipe, sem parar a operação no meio.
            </p>
          </div>

          <dl className="mt-8 grid gap-3 sm:grid-cols-3">
            {bullets.map((b) => (
              <div key={b.k} className="rounded-xl border border-border bg-card p-4">
                <Check className="size-4 text-success" />
                <dt className="mt-2 text-sm font-medium text-text">{b.k}</dt>
                <dd className="mt-0.5 text-xs leading-relaxed text-muted">{b.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative rounded-2xl border border-border bg-surface p-8">
          <div aria-hidden className="blueprint absolute inset-0 rounded-2xl opacity-60" />
          <div className="relative flex flex-col items-center gap-6">
            <div className="flex w-full justify-around">
              <Node icon={Database} label="ERP" />
              <Node icon={BarChart3} label="BI" />
              <Node icon={FileSpreadsheet} label="Planilhas" />
            </div>
            <svg aria-hidden width="100%" height="40" viewBox="0 0 300 40" className="text-border">
              <path d="M50 0 V20 H250 V0 M150 20 V40" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <div className="flex items-center gap-2.5 rounded-xl border border-primary/40 bg-primary px-5 py-3 text-on-primary shadow-[0_12px_32px_-12px_var(--primary)]">
              <span className="font-display text-lg font-bold">NextAI</span>
              <span className="font-mono text-[10px] opacity-80">núcleo da operação</span>
            </div>
            <svg aria-hidden width="100%" height="32" viewBox="0 0 300 32" className="text-border">
              <path d="M150 0 V32" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <Node icon={Smartphone} label="App de campo" highlight />
          </div>
        </div>
      </Container>
    </section>
  );
}

function Node({
  icon: Icon,
  label,
  highlight,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <span
        className={
          'grid size-12 place-items-center rounded-xl border bg-card ' +
          (highlight ? 'border-primary/40 text-primary' : 'border-border text-muted')
        }
      >
        <Icon className="size-5" />
      </span>
      <span className="font-mono text-[11px] text-muted">{label}</span>
    </div>
  );
}
