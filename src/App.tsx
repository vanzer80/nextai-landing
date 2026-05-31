import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { ProvaRapida } from './sections/ProvaRapida';
import { Pillars } from './sections/Pillars';
import { Flow } from './sections/Flow';
import { AiStories } from './sections/AiStories';
import { Sectors } from './sections/Sectors';
import { Results } from './sections/Results';
import { Integration } from './sections/Integration';
import { Faq } from './sections/Faq';
import { FinalCta } from './sections/FinalCta';
import { Footer } from './sections/Footer';

export default function App() {
  return (
    <div className="min-h-dvh bg-bg text-text">
      <a
        href="#fluxo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-on-primary"
      >
        Pular para o conteúdo principal
      </a>
      <Navbar />
      <main>
        {/* 1. Hero — proposta de valor principal */}
        <Hero />
        {/* 2. Barra de contexto de uso */}
        <ProvaRapida />
        {/* 3. Três pilares de valor */}
        <Pillars />
        {/* 4. Como funciona em 3 passos */}
        <Flow />
        {/* 5. IA na prática — micro-histórias */}
        <AiStories />
        {/* 6. Setores atendidos */}
        <Sectors />
        {/* 7. Resultados e prova social */}
        <Results />
        {/* 8. Integrações e implantação */}
        <Integration />
        {/* 9. FAQ */}
        <Faq />
        {/* 10. CTA final */}
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
