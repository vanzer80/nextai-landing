import { Receipt, LayoutDashboard, Mic } from 'lucide-react';
import { Container, Reveal, SectionTitle } from '../components/ui';

const stories = [
  {
    icon: Receipt,
    tag: 'O comprovante',
    text: 'O técnico abastece o carro às 7h40 e fotografa o cupom no posto. Quando guarda o celular, o reembolso já existe: valor, categoria combustível e Pix preenchido com os dados do técnico. O gestor não digita nada — só confere e aprova. A nota não sumiu porque nunca precisou passar de mão em mão antes de virar um dado.',
  },
  {
    icon: LayoutDashboard,
    tag: 'A manhã do gestor',
    text: '8h. O gestor abre o painel antes do café. Duas equipes ainda não registraram a primeira OS do dia; uma terceira tem um chamado com prazo estourando em duas horas. Em vez de enviar "alguém me manda um status?" para o grupo, ele já sabe para onde mandar reforço — e manda.',
  },
  {
    icon: Mic,
    tag: 'O relatório falado',
    text: 'O técnico termina o reparo, aperta o microfone e narra o que fez: peça trocada, horário de início e fim, condição do equipamento ao fechar. Quando chega ao carro, o relatório já está escrito, organizado e vinculado à OS. Nada sobrou para digitar de volta em casa, à noite.',
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

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {stories.map((s, i) => (
            <Reveal key={s.tag} delay={i * 90} className="rounded-2xl border border-border bg-card p-7">
              <span className="grid size-11 place-items-center rounded-xl bg-ai/10 text-ai">
                <s.icon className="size-5" />
              </span>
              <p className="mt-5 font-mono text-[11px] uppercase tracking-wider text-ai">{s.tag}</p>
              <p className="mt-2 text-pretty text-[15px] leading-relaxed text-text">{s.text}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
