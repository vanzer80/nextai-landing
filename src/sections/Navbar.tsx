import { useEffect, useState } from 'react';
import { NextAILogo } from '../components/NextAILogo';
import { ThemeToggle } from '../components/ThemeToggle';
import { ButtonLink, Container, cn } from '../components/ui';
import { APP_URL, DEMO_HREF } from '../config';

const links = [
  { href: '#fluxo', label: 'Como funciona' },
  { href: '#ia', label: 'IA na prática' },
  { href: '#setores', label: 'Setores' },
  { href: '#resultados', label: 'Resultados' },
  { href: '#faq', label: 'FAQ' },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'border-b border-border bg-bg/80 backdrop-blur-xl' : 'border-b border-transparent',
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <a href="#topo" aria-label="NextAI — início" className="flex items-center">
          <NextAILogo height={24} className="text-text" />
        </a>

        <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Seções da página">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm text-muted transition-colors hover:text-text"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <ButtonLink href={APP_URL} variant="ghost" className="hidden h-10 px-3 sm:inline-flex">
            Entrar
          </ButtonLink>
          <ButtonLink href={DEMO_HREF} variant="primary" className="hidden sm:inline-flex">
            Agendar demonstração
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
