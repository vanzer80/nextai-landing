import { ArrowRight } from 'lucide-react';
import { Container, Eyebrow, Reveal } from '../components/ui';

const hoje = [
  'As OS estão espalhadas em 18 conversas. Algumas têm foto, outras só um “tá feito”.',
  'Os comprovantes chegam como print, áudio e “depois te mando a nota”.',
  'Ele monta a planilha de reembolso na mão — e o financeiro devolve duas vezes por falta de valor ou favorecido.',
  'Quando perguntam “esse reembolso de R$ 1.240 foi aprovado por quem?”, ninguém sabe responder.',
];

export function Problem() {
  return (
    <section id="problema" className="py-24 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <Eyebrow>O problema</Eyebrow>
          <h2 className="mt-4 text-balance text-[1.9rem] font-bold leading-[1.1] sm:text-[2.5rem]">
            O problema não é o WhatsApp. É não saber o que ficou para trás.
          </h2>
          <p className="mt-5 text-pretty text-[1.05rem] leading-relaxed text-muted">
            Sexta, 17h. O Marcelo é supervisor de uma equipe de seis técnicos de manutenção predial. Para fechar a
            semana, ele precisa de duas coisas: saber quais OS realmente fecharam e juntar os comprovantes de despesa
            de cada técnico.
          </p>
        </div>

        <Reveal className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <span className="font-mono text-[11px] uppercase tracking-wider text-alert">Como é hoje</span>
          <ul className="mt-5 space-y-4">
            {hoje.map((item) => (
              <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-muted">
                <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-alert/70" />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-7 border-t border-border pt-6">
            <p className="text-[15px] leading-relaxed text-text">
              O reembolso que trava na sexta não é problema de aplicativo de mensagem. É de não ter um lugar onde a OS
              e a despesa nascem prontas — com foto, valor e responsável. É isso que o NextAI resolve primeiro.
            </p>
            <a
              href="#fluxo"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-hover"
            >
              Ver como esse fechamento fica no NextAI
              <ArrowRight className="size-4" />
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
