# NextAI Landing Page · Contexto de Desenvolvimento

## Ambiente

- **Diretório local:** `C:\Users\vanze\OneDrive\Área de Trabalho\nextai-landing`
- **GitHub:** `https://github.com/vanzer80/nextai-landing`
- **Produção:** `https://nextai-landing-gilt.vercel.app` (auto-deploy ao push no master)
- **Dev server:** `npm run dev` (porta 4321)
- **Projeto Vercel:** `nextai-landing` · time `luis-projects-1fb80015`

**Repo separado do app principal** (`nextai-plataform`). Não compartilha código, dependências nem Supabase.

## Verificação obrigatória após qualquer mudança

```bash
npm run build   # tsc --noEmit + vite build — deve terminar sem erro
```

## Stack

Vite 6 + React 19 + TypeScript 5.8 + Tailwind v4 (SPA estática, sem backend)  
Lucide React · `@tailwindcss/vite` · `vercel.json` com rewrite SPA + headers de segurança

## Arquitetura

```
src/
  config.ts           — CALENDLY_URL, APP_URL, DEMO_HREF (ver seção de pendências)
  content/            — CAMADA DE DADOS SEPARADA DO JSX (editar copy sem tocar componente)
    metrics.ts        — Metric { value: string | null, label, collection }
    testimonials.ts   — Testimonial { ..., fictional: boolean }
    faq.ts            — FaqItem[]
  components/
    ui.tsx            — Container, Reveal, Eyebrow, ButtonLink, SectionTitle, AiTag
    NextAILogo.tsx
    ThemeToggle.tsx
  sections/           — uma seção = um arquivo
    Navbar.tsx
    Hero.tsx          — h1 + subtítulo + CTAs + trust signals
    ProvaRapida.tsx   — barra de contexto (thin strip)
    Pillars.tsx       — 3 pilares de valor
    Flow.tsx          — 3 passos captura → organiza → decide
    AiStories.tsx     — 3 micro-histórias de IA
    Sectors.tsx       — 4 setores operacionais (manutenção, facilities, AT, obras)
    Results.tsx       — métricas tipadas + depoimentos
    Integration.tsx   — conexão ERP/BI + implantação gradual
    Faq.tsx           — FAQ accordion (dados de content/faq.ts)
    FinalCta.tsx      — CTA final
    Footer.tsx
  App.tsx             — composição das seções na ordem certa
```

## Padrão crítico: métricas com `value: null`

```typescript
// NUNCA usar string de placeholder crua em produção (quebra o layout visualmente).
// Quando value é null, o componente MetricValue exibe "—" + badge "Em coleta".

interface Metric {
  value: string | null;  // null = dado ainda não coletado
  label: string;
  collection: string;    // instrução interna de coleta — não exibida na landing
}
```

## Pendências antes de campanha paga

| Prioridade | Item | Arquivo | Ação |
|---|---|---|---|
| Alta | Métricas reais | `src/content/metrics.ts` | 4x `value: null` → string com dado real (ex: `"47%"`) |
| Alta | Calendly | `src/config.ts` | `CALENDLY_URL` → URL real do Calendly com evento de 30 min e perguntas de qualificação |
| Média | Depoimentos reais | `src/content/testimonials.ts` | Substituir entradas `fictional: true` por dados de clientes reais autorizados |
| Média | OG Image | `public/og-image.svg` | SVG provisório — substituir por imagem real 1200×630px antes de compartilhar em redes sociais |

## Como adicionar/editar copy

- **Seção de texto** (hero, flow, pillars etc.): editar diretamente no `.tsx` da seção.
- **Métricas**: editar `src/content/metrics.ts` — não tocar em `Results.tsx`.
- **Depoimentos**: editar `src/content/testimonials.ts`.
- **FAQ**: editar `src/content/faq.ts`.
- **URLs de destino dos CTAs**: editar `src/config.ts`.

## Como adicionar uma nova seção

1. Criar `src/sections/NomeDaSecao.tsx`
2. Usar `id="nome-da-secao"` no `<section>` para âncora de navegação
3. Importar em `src/App.tsx` na posição correta
4. Adicionar link de navegação em `src/sections/Navbar.tsx` e `src/sections/Footer.tsx`

## Deploy

```bash
git add -A && git commit -m "feat: descrição" && git push origin master
# A Vercel faz build e deploy automático em ~30s
```

Verificar: `curl -s -o /dev/null -w "%{http_code}" https://nextai-landing-gilt.vercel.app/`
