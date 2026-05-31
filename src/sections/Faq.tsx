import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Container, SectionTitle, cn } from '../components/ui';

const faqs = [
  {
    q: 'Funciona offline de verdade?',
    a: 'Sim. O técnico preenche OS, checklist e fotos sem sinal; tudo fica salvo no aparelho e sincroniza sozinho quando a conexão volta. Nada se perde no caminho.',
  },
  {
    q: 'Preciso trocar todo o meu processo de uma vez?',
    a: 'Não. A implantação é por equipe e replica os fluxos que você já tem — começando pelos seus checklists e regras de aprovação atuais. O WhatsApp sai aos poucos, sem parar a operação.',
  },
  {
    q: 'Como a IA lida com os meus dados?',
    a: 'A IA lê comprovantes, materiais e voz para preencher campos e sugerir prioridades. Os dados de cada empresa ficam isolados, e a IA atua sobre o seu contexto — sem compartilhar informação entre clientes.',
  },
  {
    q: 'Dá para começar com uma equipe pequena?',
    a: 'Sim, e é o que recomendamos. Valide com uma frente de cinco a dez pessoas, ajuste os fluxos e expanda. A configuração e a cobrança acompanham esse crescimento.',
  },
  {
    q: 'Tem aplicativo para celular?',
    a: 'O NextAI instala como aplicativo direto pelo navegador (PWA), em Android e iOS, sem depender de loja. É a mesma plataforma, otimizada para uso em campo.',
  },
  {
    q: 'Os dados de cada empresa ficam separados?',
    a: 'Sim. O isolamento é por empresa em nível de banco de dados: cada cliente só enxerga os próprios dados, sem exceção. É a base do modelo multiempresa.',
  },
  {
    q: 'Consigo usar a minha marca?',
    a: 'Sim. Logo, cor e identidade da sua empresa são aplicados em toda a interface. Para quem opera várias unidades, cada uma roda com a marca certa.',
  },
  {
    q: 'E se o técnico não for bom com tecnologia?',
    a: 'A captura por voz e o preenchimento automático existem justamente para isso: ele fala e fotografa, a IA estrutura. A curva de aprendizado no campo é de minutos, não de dias.',
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="py-24 sm:py-28">
      <Container className="max-w-3xl">
        <SectionTitle eyebrow="Perguntas frequentes" title="O que os gestores perguntam antes de decidir." />

        <div className="mt-12 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-bg"
                >
                  <span className="font-medium">{f.q}</span>
                  <Plus className={cn('size-5 shrink-0 text-muted transition-transform duration-300', isOpen && 'rotate-45 text-primary')} />
                </button>
                <div className={cn('grid overflow-hidden transition-all duration-300', isOpen ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0')}>
                  <p className="min-h-0 max-w-2xl text-sm leading-relaxed text-muted">{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
