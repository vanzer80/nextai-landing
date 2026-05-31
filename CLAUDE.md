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

## Sistema de cores (design tokens) — concluído 2026-05-31

Todo o sistema de cores está em `src/index.css` via CSS custom properties mapeadas ao Tailwind v4.
**Nunca usar hexadecimal direto em componente.** Usar sempre o token Tailwind correspondente.

### Tokens disponíveis e regra de uso

| Token Tailwind | CSS var | Dark | Papel — quando usar |
|---|---|---|---|
| `bg-bg` | `--bg` | `#0a0e17` | Fundo principal da página |
| `bg-surface` | `--surface` | `#0e1421` | Seções com fundo alternado |
| `bg-card` | `--card` | `#141c2e` | Cards e blocos de conteúdo |
| `bg-card2` | `--card2` | `#1a2336` | Interior de cards (chart bg, kpi bg) |
| `border-border` | `--border` | `rgba(255,255,255,0.08)` | Borda de card e superfície |
| `border-border-subtle` | `--border-subtle` | `rgba(255,255,255,0.04)` | Divisores internos (FAQ, depoimentos) |
| `text-text` | `--text` | `#eaeff7` | Títulos e CTAs — máximo contraste |
| `text-text-secondary` | `--text-secondary` | `#c3cddd` | Subtítulos e intro text |
| `text-muted` | `--muted` | `#93a1b8` | Labels, captions, metadados |
| `bg-primary` / `text-primary` | `--primary` | `#3b6ff6` | **ÚNICO azul de ação** — botão CTA, links, ícones ativos |
| `hover:bg-primary-hover` | `--primary-hover` | `#2f62e6` | Hover do primary — **sempre escurece** |
| `text-on-primary` | `--on-primary` | `#ffffff` | Texto sobre fundo primary |
| `text-ai` / `bg-ai` | `--ai` | `#2fe0ce` | **ÚNICO teal** — exclusivo para contexto de IA |
| `text-success` | `--success` | `#34c77b` | Confirmação, estado positivo |
| `text-warning` | `--warning` | `#f5a524` | Alerta, SLA em risco |
| `text-danger` | `--danger` | `#f04040` | Erro, falha, exclusão |

### Regras que não podem ser violadas

1. **`text-ai` / `bg-ai` são exclusivos para IA** — nunca usar em contexto não-IA, mesmo que o teal "fique bonito".
2. **`primary` é a única cor de ação** — não criar variantes azuis paralelas. Se precisar de destaque secundário, usar `primary/10` (opacidade).
3. **Hover sempre escurece** — `primary-hover` é mais escuro que `primary`. Nunca inverta essa relação.
4. **Títulos (`h1, h2, h3`) sempre em `text-text`** — garantido no `@layer base` do CSS, não sobrescrever com `text-muted`.
5. **`border-subtle` para divisores internos** — `border-border` para bordas de card; `border-border-subtle` para linhas internas (FAQ accordion, separador de depoimento).

### Soft backgrounds (opacidades)

```
bg-primary/5   → hover sutil em botão secondary
bg-primary/10  → background de ícone em pilar/setor
bg-primary/15  → avatar / badge de usuário
bg-ai/10       → background de card de IA
bg-success/12  → background de chip de sucesso
bg-warning/12  → background de chip de alerta
bg-danger/12   → background de chip de erro
```

### WCAG AA — contrastes verificados

| Combinação | Ratio | Status |
|---|---|---|
| `text` (#eaeff7) sobre `bg` (#0a0e17) | 15.5:1 | AAA ✓ |
| `text-secondary` (#c3cddd) sobre `bg` | 9.2:1 | AAA ✓ |
| `muted` (#93a1b8) sobre `bg` | 5.4:1 | AA ✓ |
| `on-primary` (#fff) sobre `primary` (#3b6ff6) | 4.7:1 | AA ✓ |
| `primary` (#3b6ff6) como texto sobre `bg` | 4.7:1 | AA ✓ |

---

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
