import { Receipt, LayoutDashboard, Mic } from 'lucide-react';
import { Container, Reveal, SectionTitle } from '../components/ui';

const stories = [
  {
    icon: Receipt,
    tag: 'O comprovante',
    text: 'O técnico abastece o carro às 7h40 e fotografa o cupom no posto. Quando guarda o celular, o reembolso já existe: R$ 1.240, categoria combustível, Pix preenchido. O gestor não digita nada — só confere e aprova. A nota não some até sexta porque nunca passou pelo WhatsApp.',
  },
  {
    icon: LayoutDashboard,
    tag: 'A manhã do gestor',
    text: '8h. O gestor abre o painel antes do café. Duas equipes ainda não registraram a primeira OS do dia; uma terceira está com um chamado prestes a estourar o prazo. Em vez de mandar “alguém me dá um status?” no grupo, ele já sabe para onde mandar reforço.',
  },
  {
    icon: Mic,
    tag: 'O relatório falado',
    text: 'O técnico termina o serviço, aperta o microfone e conta o que fez. Quando chega no carro, o relatório da OS está escrito e organizado — não sobrou nada para digitar à noite, em casa.',
  },
];

export function AiStories() {
  return (
    <section id="ia" className="py-24 sm:py-28">
      <Container>
        <SectionTitle ai eyebrow="A IA no meio do caminho" title="A IA não aparece na tela. Ela tira trabalho da sua mesa." />

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
