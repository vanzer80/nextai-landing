import { Receipt, LayoutDashboard, Mic } from 'lucide-react';
import { Container, Reveal, SectionTitle } from '../components/ui';

const stories = [
  {
    icon: LayoutDashboard,
    tag: 'A manhã do gestor',
    text: '8h. O gestor abre o painel antes do café. Duas equipes ainda não registraram a primeira ordem de serviço do dia; uma terceira tem um chamado com prazo estourando em duas horas. Em vez de enviar "alguém me manda um status?" para o grupo, ele já sabe para onde mandar reforço — e manda.',
    featured: true,
  },
  {
    icon: Receipt,
    tag: 'O comprovante',
    text: 'O técnico abastece o carro às 7h40 e fotografa o cupom no posto. Quando guarda o celular, o reembolso já existe: valor, categoria combustível e Pix preenchido. O gestor não digita nada — só confere e aprova.',
    featured: false,
  },
  {
    icon: Mic,
    tag: 'O relatório falado',
    text: 'O técnico termina o reparo, aperta o microfone e narra o que fez. Quando chega ao carro, o relatório já está escrito, organizado e vinculado à ordem de serviço. Nada sobrou para digitar de volta em casa, à noite.',
    featured: false,
  },
] as const;

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
          {stories.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal
                key={s.tag}
                delay={i * 90}
                className={s.featured ? 'lg:col-span-2 lg:row-span-2' : ''}
              >
                <div
                  className="group relative h-full overflow-hidden rounded-2xl p-7 transition-all duration-300 hover:-translate-y-0.5"
                  style={{
                    background: s.featured
                      ? 'linear-gradient(160deg, color-mix(in srgb, var(--ai) 7%, var(--card)) 0%, var(--card) 60%)'
                      : 'var(--card)',
                    border: s.featured
                      ? '1px solid color-mix(in srgb, var(--ai) 18%, transparent)'
                      : '1px solid var(--border)',
                    boxShadow: s.featured
                      ? '0 20px 60px -20px color-mix(in srgb, var(--ai) 12%, transparent)'
                      : undefined,
                  }}
                >
                  {/* Background glow for featured */}
                  {s.featured && (
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full blur-[80px]"
                      style={{ background: 'color-mix(in srgb, var(--ai) 8%, transparent)' }}
                    />
                  )}

                  <div className="relative">
                    <span
                      className="grid size-11 place-items-center rounded-xl transition-all duration-300 group-hover:scale-105"
                      style={{
                        background: 'color-mix(in srgb, var(--ai) 12%, transparent)',
                        color: 'var(--ai)',
                      }}
                    >
                      <Icon className="size-5" />
                    </span>

                    <p className="mt-5 font-mono text-[11px] uppercase tracking-wider" style={{ color: 'var(--ai)' }}>
                      {s.tag}
                    </p>

                    <p
                      className={`mt-2 text-pretty leading-relaxed text-text ${s.featured ? 'text-[16px]' : 'text-[14px]'}`}
                    >
                      {s.text}
                    </p>
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
