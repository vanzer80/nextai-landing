import { useEffect, useState } from 'react';
import { NextAILogo } from '../components/NextAILogo';
import { ThemeToggle } from '../components/ThemeToggle';
import { ButtonLink, Container, cn } from '../components/ui';
import { APP_URL, DEMO_HREF } from '../config';

const links = [
  { href: '#fluxo',      label: 'Como funciona' },
  { href: '#ia',         label: 'IA na prática'  },
  { href: '#setores',    label: 'Setores'         },
  { href: '#resultados', label: 'Resultados'      },
  { href: '#faq',        label: 'FAQ'             },
] as const;

export function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [progress,  setProgress]  = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y     = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 8);
      setProgress(total > 0 ? Math.min((y / total) * 100, 100) : 0);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-bg/85 backdrop-blur-xl shadow-sm shadow-black/10'
          : 'border-b border-transparent',
      )}
    >
      {/* Scroll progress bar */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left transition-[width] duration-100"
        style={{
          width:      `${progress}%`,
          background: 'linear-gradient(to right, var(--primary), var(--ai))',
          opacity:    progress > 1 ? 1 : 0,
        }}
      />

      <Container className="flex h-16 items-center justify-between">
        <a href="#topo" aria-label="NextAI — início" className="flex items-center">
          <NextAILogo height={28} className="text-text" />
        </a>

        {/* Desktop nav */}
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
          {/* CTA mobile compacto */}
          <ButtonLink href={DEMO_HREF} variant="primary" className="sm:hidden h-9 px-3 text-xs">
            Demo grátis
          </ButtonLink>
          {/* CTA desktop completo */}
          <ButtonLink href={DEMO_HREF} variant="primary" className="hidden sm:inline-flex">
            Agendar demonstração
          </ButtonLink>
        </div>
      </Container>
    </header>
  );
}
