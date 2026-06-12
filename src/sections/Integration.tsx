import { Database, FileSpreadsheet, BarChart3, Smartphone, Check } from 'lucide-react';
import { Container, Eyebrow } from '../components/ui';

const bullets = [
  { k: 'Começa com uma equipe', v: 'expande quando os resultados aparecerem' },
  { k: 'Importa o que você já tem', v: 'clientes, equipamentos, histórico — e chamados em PDF viram OS sem redigitação' },
  { k: 'Fala com o seu ERP', v: 'API documentada, chaves por integração e webhooks em tempo real' },
  { k: 'Onboarding com estrutura', v: 'técnicos aprendem em minutos; gestores, em uma conversa' },
] as const;

export function Integration() {
  return (
    <section id="implantacao" className="py-24 sm:py-28">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div>
          <Eyebrow>Conecta com o que você já usa</Eyebrow>
          <h2 className="mt-4 text-balance text-[1.9rem] font-bold leading-[1.1] sm:text-[2.4rem]">
            Você não abandona o que já roda. Você para de digitar nas duas pontas.
          </h2>
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-muted">
            <p>
              O financeiro continua no ERP e a diretoria continua no BI. O NextAI entrega ordens de serviço fechadas
              e reembolsos aprovados para esses sistemas em PDF, Excel ou por API — com webhooks que
              avisam o seu sistema no momento em que uma OS fecha, um reembolso é aprovado ou um
              orçamento é assinado. Ninguém precisa mudar de ferramenta para parar de copiar dado de
              uma tela para outra.
            </p>
            <p>
              A entrada é por partes. Começa com uma equipe, com os seus tipos de ordem de serviço, categorias de
              despesa e regras de aprovação já configurados. Quando essa frente está funcionando de
              forma consistente, entra a próxima. A saída dos fluxos improvisados acontece equipe por
              equipe, sem interromper a operação no meio do caminho.
            </p>
            <p>
              O onboarding tem estrutura definida: importamos dados de clientes, equipamentos e
              histórico; configuramos os checklists dos seus tipos de serviço; e treinamos gestores
              em uma conversa e técnicos em menos de uma hora. O suporte continua disponível depois
              para ajustar o que for preciso à medida que a operação cresce.
            </p>
          </div>

          <dl className="mt-8 grid gap-3 sm:grid-cols-2">
            {bullets.map((b) => (
              <div key={b.k} className="rounded-xl border border-border bg-card p-4">
                <Check className="size-4 text-success" />
                <dt className="mt-2 text-sm font-medium text-text">{b.k}</dt>
                <dd className="mt-0.5 text-xs leading-relaxed text-muted">{b.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative hidden rounded-2xl border border-border bg-surface p-8 md:block">
          <div aria-hidden className="blueprint absolute inset-0 rounded-2xl opacity-60" />
          <div className="relative flex flex-col items-center gap-6">
            <div className="flex w-full justify-around">
              <Node icon={Database} label="ERP" />
              <Node icon={BarChart3} label="BI" />
              <Node icon={FileSpreadsheet} label="Planilhas" />
            </div>
            <span className="-my-4 font-mono text-[10px] text-muted">API · webhooks em tempo real</span>
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
