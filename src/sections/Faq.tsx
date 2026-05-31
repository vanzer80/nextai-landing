import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Container, SectionTitle, cn } from '../components/ui';
import { FAQ_ITEMS } from '../content/faq';

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 sm:py-28">
      <Container className="max-w-3xl">
        <SectionTitle eyebrow="Perguntas frequentes" title="O que os gestores perguntam antes de decidir." />

        <div className="mt-12 divide-y divide-border-subtle border-y border-border-subtle">
          {FAQ_ITEMS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} role="region" aria-labelledby={`faq-btn-${i}`}>
                <button
                  id={`faq-btn-${i}`}
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-bg"
                >
                  <span className="font-medium">{f.q}</span>
                  <Plus
                    className={cn(
                      'size-5 shrink-0 text-muted transition-transform duration-300',
                      isOpen && 'rotate-45 text-primary',
                    )}
                  />
                </button>
                <div
                  className={cn(
                    'grid overflow-hidden transition-all duration-300',
                    isOpen ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0',
                  )}
                >
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
