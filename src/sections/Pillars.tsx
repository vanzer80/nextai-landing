import { Smartphone, ShieldCheck, BarChart3 } from 'lucide-react';
import { Container, Reveal, SectionTitle } from '../components/ui';

const pillars = [
  {
    n: '01',
    icon: Smartphone,
    title: 'Execução em campo',
    tagline: 'O técnico registra no ato. Sem depender de conexão ou de lembrar mais tarde.',
    points: [
      'A ordem de serviço é aberta no celular logo ao chegar ao local — com checklist, fotos e categoria do serviço já configurados.',
      'O comprovante é fotografado ali mesmo, antes de a nota sumir no bolso ou ficar esquecida no banco do carro.',
      'Área sem sinal no subsolo, na fábrica ou em obra? O registro fica salvo e sobe sozinho quando a conexão volta.',
    ],
    featured: true,
    accent: 'primary',
  },
  {
    n: '02',
    icon: ShieldCheck,
    title: 'Aprovação rastreável',
    tagline: 'Cada decisão registra quem aprovou, quando e por quê.',
    points: [
      'O reembolso chega ao gestor com valor, favorecido e categoria já extraídos da foto.',
      'Devoluções caem porque o sistema avisa o técnico antes de seguir para aprovação.',
    ],
    featured: false,
    accent: 'ai',
  },
  {
    n: '03',
    icon: BarChart3,
    title: 'Visão em tempo real',
    tagline: 'O painel mostra o que precisa de atenção — não tudo de uma vez.',
    points: [
      'Primeira tela do dia: quantas ordens de serviço abertas, quais travaram e quais SLAs estão estourando.',
      'Relatórios por equipe e período sem o financeiro reorganizar planilha.',
    ],
    featured: false,
    accent: 'success',
  },
] as const;

export function Pillars() {
  return (
    <section id="pilares" className="py-24 sm:py-28">
      <Container>
        <SectionTitle
          eyebrow="Por que funciona"
          title="Três coisas que mudam quando a operação tem um lugar só."
        />

        {/* Bento grid: 1 large featured card + 2 stacked small cards */}
        <div className="mt-14 grid gap-4 lg:grid-cols-3 lg:grid-rows-2">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            const accentColor =
              p.accent === 'primary' ? 'var(--primary)' : p.accent === 'ai' ? 'var(--ai)' : 'var(--success)';
            const accentBg =
              p.accent === 'primary'
                ? 'color-mix(in srgb, var(--primary) 10%, transparent)'
                : p.accent === 'ai'
                ? 'color-mix(in srgb, var(--ai) 10%, transparent)'
                : 'color-mix(in srgb, var(--success) 10%, transparent)';
            const accentBorder =
              p.accent === 'primary'
                ? 'color-mix(in srgb, var(--primary) 20%, transparent)'
                : p.accent === 'ai'
                ? 'color-mix(in srgb, var(--ai) 15%, transparent)'
                : 'color-mix(in srgb, var(--success) 15%, transparent)';

            return (
              <Reveal
                key={p.n}
                delay={i * 80}
                className={p.featured ? 'lg:col-span-2 lg:row-span-2' : ''}
              >
                <div
                  className="group relative h-full overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-0.5 sm:p-7"
                  style={{
                    background: p.featured
                      ? `linear-gradient(160deg, color-mix(in srgb, ${accentColor} 8%, var(--card)) 0%, var(--card) 60%)`
                      : 'var(--card)',
                    border: `1px solid ${p.featured ? accentBorder : 'var(--border)'}`,
                    boxShadow: p.featured
                      ? `0 0 0 1px ${accentBorder}, 0 20px 60px -20px color-mix(in srgb, ${accentColor} 15%, transparent)`
                      : undefined,
                  }}
                >
                  {/* Large background number */}
                  <span
                    className="pointer-events-none absolute -right-3 -top-4 select-none font-display text-[7rem] font-bold leading-none tracking-tighter opacity-[0.045]"
                    style={{ color: accentColor }}
                  >
                    {p.n}
                  </span>

                  <div className="relative">
                    <span
                      className="grid size-12 place-items-center rounded-xl transition-all duration-300 group-hover:scale-105"
                      style={{ background: accentBg, color: accentColor }}
                    >
                      <Icon className="size-6" />
                    </span>

                    <h3 className={`mt-5 font-semibold ${p.featured ? 'text-xl' : 'text-lg'}`}>
                      {p.title}
                    </h3>
                    <p className="mt-1.5 text-sm font-medium" style={{ color: accentColor }}>
                      {p.tagline}
                    </p>

                    <ul className="mt-5 space-y-3">
                      {p.points.map((point) => (
                        <li key={point} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                          <span
                            className="mt-[7px] size-1 shrink-0 rounded-full"
                            style={{ background: accentColor, opacity: 0.5 }}
                          />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
