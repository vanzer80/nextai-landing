import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { DEMO_HREF } from '../config';

export function MobileCtaBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div
      className={[
        'fixed inset-x-0 bottom-0 z-40 lg:hidden',
        'transition-transform duration-300 ease-out',
        visible ? 'translate-y-0' : 'translate-y-full',
      ].join(' ')}
      style={{
        background:           'rgba(10,14,23,0.96)',
        borderTop:            '1px solid rgba(255,255,255,0.07)',
        backdropFilter:       'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        paddingBottom:        'env(safe-area-inset-bottom, 0px)',
      }}
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <a
          href={DEMO_HREF}
          className="flex flex-1 items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold text-white"
          style={{
            background:  'var(--primary)',
            boxShadow:   '0 4px 16px -4px color-mix(in srgb, var(--primary) 55%, transparent)',
          }}
        >
          Agendar demonstração
          <ArrowRight className="size-4" />
        </a>
        <div className="shrink-0 text-right">
          <p className="font-mono text-[10px] text-muted">30 min</p>
          <p className="font-mono text-[10px] text-muted">sem compromisso</p>
        </div>
      </div>
    </div>
  );
}
