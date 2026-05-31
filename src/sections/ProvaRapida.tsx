import { Container } from '../components/ui';

export function ProvaRapida() {
  return (
    <section aria-label="Contexto de uso" className="border-y border-border bg-surface py-10">
      <Container>
        <p className="mx-auto max-w-3xl text-center text-pretty text-base leading-relaxed text-muted">
          Equipes de manutenção industrial, facilities prediais e assistência técnica usam o NextAI para
          fechar ordem de serviço e reembolso no mesmo dia — em vez de empurrar para o fim do mês e caçar comprovante
          por mensagem na sexta.
        </p>
      </Container>
    </section>
  );
}
