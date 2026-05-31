import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

type Theme = 'light' | 'dark';
const KEY = 'nextai-lp-theme';

function getInitial(): Theme {
  if (typeof document === 'undefined') return 'dark';
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

export function ThemeToggle({ className }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>(getInitial);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;
    try {
      localStorage.setItem(KEY, theme);
    } catch {
      /* localStorage indisponível — segue com o tema em memória */
    }
  }, [theme]);

  const next: Theme = theme === 'dark' ? 'light' : 'dark';
  return (
    <button
      type="button"
      onClick={() => setTheme(next)}
      aria-label={`Mudar para tema ${next === 'dark' ? 'escuro' : 'claro'}`}
      className={
        'inline-flex size-10 items-center justify-center rounded-lg border border-border text-muted transition-colors hover:border-primary/50 hover:text-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ' +
        (className ?? '')
      }
    >
      {theme === 'dark' ? <Sun className="size-[18px]" /> : <Moon className="size-[18px]" />}
    </button>
  );
}
