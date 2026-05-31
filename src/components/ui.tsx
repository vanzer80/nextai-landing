import type { ReactNode, ComponentPropsWithoutRef } from 'react';
import { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';

export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn('mx-auto w-full max-w-[1180px] px-5 sm:px-8', className)}>{children}</div>;
}

/** Reveal on-scroll respeitando prefers-reduced-motion (tratado no CSS). */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, shown } as const;
}

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'section' | 'li';
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      data-shown={shown}
      className={cn('reveal', className)}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

export function Eyebrow({ children, ai = false }: { children: ReactNode; ai?: boolean }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.18em]',
        ai ? 'text-ai' : 'text-primary',
      )}
    >
      {ai && <Sparkles className="size-3.5" />}
      {children}
    </span>
  );
}

type ButtonProps = ComponentPropsWithoutRef<'a'> & {
  variant?: 'primary' | 'secondary' | 'ghost' | 'invert';
  size?: 'md' | 'lg';
};

export function ButtonLink({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  const base =
    'group inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg active:scale-[0.985] disabled:pointer-events-none disabled:opacity-50';
  const sizes = { md: 'h-10 px-4 text-sm', lg: 'h-12 px-6 text-[15px]' };
  const variants = {
    primary:
      'bg-primary text-on-primary shadow-[0_8px_24px_-8px_var(--primary)] hover:bg-primary-hover hover:shadow-[0_12px_32px_-8px_var(--primary)] hover:-translate-y-0.5',
    secondary: 'border border-border bg-card text-text hover:border-primary/50 hover:-translate-y-0.5',
    ghost: 'text-muted hover:text-text',
    invert: 'bg-bg text-text shadow-lg hover:-translate-y-0.5',
  };
  return (
    <a className={cn(base, sizes[size], variants[variant], className)} {...props}>
      {children}
    </a>
  );
}

export function SectionTitle({
  eyebrow,
  ai,
  title,
  intro,
  align = 'center',
}: {
  eyebrow?: string;
  ai?: boolean;
  title: ReactNode;
  intro?: ReactNode;
  align?: 'center' | 'left';
}) {
  return (
    <div className={cn('max-w-2xl', align === 'center' ? 'mx-auto text-center' : 'text-left')}>
      {eyebrow && <Eyebrow ai={ai}>{eyebrow}</Eyebrow>}
      <h2 className="mt-4 text-balance text-[1.9rem] font-bold leading-[1.08] sm:text-[2.5rem]">{title}</h2>
      {intro && <p className="mt-4 text-pretty text-[1.05rem] leading-relaxed text-muted">{intro}</p>}
    </div>
  );
}

/** Etiqueta "extraído por IA" — único uso do ciano. */
export function AiTag({ children = 'Extraído por IA' }: { children?: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-md border border-ai/30 bg-ai/10 px-2 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-ai">
      <Sparkles className="size-3" />
      {children}
    </span>
  );
}
