import { NextAILogo } from '../components/NextAILogo';
import { Container } from '../components/ui';
import { APP_URL, DEMO_HREF } from '../config';

const cols = [
  {
    title: 'Produto',
    links: [
      { label: 'Como funciona', href: '#fluxo' },
      { label: 'IA na prática', href: '#ia' },
      { label: 'Setores', href: '#setores' },
      { label: 'Resultados', href: '#resultados' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Acesso',
    links: [
      { label: 'Agendar demonstração', href: DEMO_HREF },
      { label: 'Entrar na plataforma', href: APP_URL },
      { label: 'Portal do cliente', href: APP_URL },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <NextAILogo height={24} className="text-text" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            A operação de campo inteira em um sistema só — do chamado ao financeiro, com IA,
            aprovação rastreável e funcionamento offline.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h3 className="font-mono text-[11px] uppercase tracking-wider text-muted">{c.title}</h3>
            <ul className="mt-4 space-y-2.5">
              {c.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-muted transition-colors hover:text-text">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>
      <Container className="flex flex-col items-center justify-between gap-2 border-t border-border py-6 font-mono text-[11px] text-muted sm:flex-row">
        <p>© {new Date().getFullYear()} NextAI · Todos os direitos reservados</p>
        <p>Feito para quem trabalha em campo.</p>
      </Container>
    </footer>
  );
}
