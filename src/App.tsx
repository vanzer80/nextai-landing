import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { ProvaRapida } from './sections/ProvaRapida';
import { Problem } from './sections/Problem';
import { Flow } from './sections/Flow';
import { AiStories } from './sections/AiStories';
import { Personas } from './sections/Personas';
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
        Pular para o conteúdo
      </a>
      <Navbar />
      <main>
        <Hero />
        <ProvaRapida />
        <Problem />
        <Flow />
        <AiStories />
        <Personas />
        <Results />
        <Integration />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
