import { WifiOff, ShieldCheck, Palette } from 'lucide-react';
import { Container } from '../components/ui';

const selos = [
  { icon: WifiOff, title: 'Funciona offline', desc: 'O técnico não depende de sinal no subsolo ou na fábrica.' },
  { icon: ShieldCheck, title: 'Dados separados por empresa', desc: 'Cada operação enxerga só a sua.' },
  { icon: Palette, title: 'Com a sua marca', desc: 'A plataforma leva o logo da sua empresa.' },
];

export function ProvaRapida() {
  return (
    <section className="border-y border-border bg-surface py-12">
      <Container>
        <p className="mx-auto max-w-3xl text-center text-pretty text-base leading-relaxed text-muted">
          Equipes de manutenção predial, industrial e assistência técnica usam o NextAI para fechar OS e reembolso no
          mesmo dia — em vez de empurrar para o fim do mês.
        </p>
        <div className="mx-auto mt-8 grid max-w-3xl gap-4 sm:grid-cols-3">
          {selos.map((s) => (
            <div key={s.title} className="flex items-start gap-3">
              <s.icon className="mt-0.5 size-4 shrink-0 text-primary" />
              <div>
                <p className="text-sm font-medium">{s.title}</p>
                <p className="text-xs leading-relaxed text-muted">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
