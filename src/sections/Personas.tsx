import { HardHat, LayoutDashboard, Wallet, PackageSearch } from 'lucide-react';
import { Container, Reveal, SectionTitle } from '../components/ui';

const personas = [
  {
    icon: HardHat,
    role: 'Técnico de campo',
    gain: 'Termina o serviço e já está livre do relatório.',
    points: ['Abre e narra a OS por voz', 'Fotografa o comprovante e pronto', 'Registra offline e sincroniza depois'],
  },
  {
    icon: LayoutDashboard,
    role: 'Gestor de operações',
    gain: 'Sabe o que fechou sem perguntar de um em um.',
    points: ['Vê quais OS fecharam e quais travaram', 'Aprova reembolsos em lote', 'Manda reforço para quem está parado'],
  },
  {
    icon: Wallet,
    role: 'Financeiro',
    gain: 'Recebe reembolso com nota, não com print.',
    points: ['Valor, favorecido e categoria lidos da foto', 'Devolve menos: falta é sinalizada no campo', 'Fecha o mês com cada aprovação registrada'],
  },
  {
    icon: PackageSearch,
    role: 'Compras e estoque',
    gain: 'Pedido que dá pra entender e atender.',
    points: ['Requisição com foto e descrição do material', 'Acompanha do aceite à entrega', 'Tudo no mesmo lugar da OS'],
  },
];

export function Personas() {
  return (
    <section id="para-quem" className="border-y border-border bg-surface py-24 sm:py-28">
      <Container>
        <SectionTitle eyebrow="Para quem é" title="Cada um resolve a sua parte sem cobrar o outro no grupo." />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {personas.map((p, i) => (
            <Reveal
              key={p.role}
              delay={i * 60}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <span className="grid size-11 place-items-center rounded-xl border border-border bg-card2 text-primary transition-colors group-hover:border-primary/40">
                <p.icon className="size-5" />
              </span>
              <h3 className="mt-4 font-semibold">{p.role}</h3>
              <p className="mt-1 text-sm italic text-muted">{p.gain}</p>
              <ul className="mt-4 space-y-2 font-mono text-[13px] text-muted">
                {p.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <span className="text-primary">›</span>
                    {pt}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <p className="mt-10 text-center text-[15px] text-muted">
          E quem é dono ou diretor olha tudo isso consolidado — por equipe, por unidade, com cada empresa separada.
        </p>
      </Container>
    </section>
  );
}
