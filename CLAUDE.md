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
| Média | OG Image | `public/og-image.png` | Arquivo PNG 1200×630px — já referenciado corretamente no `index.html`; gerar a imagem real |

---

## Componente de Logo — NextAILogo.tsx

O logo horizontal é um SVG puro que combina um símbolo geométrico N com o wordmark textual.

### Estrutura do SVG horizontal (variant='horizontal')

```
viewBox="0 0 555 200"   ← largura calibrada para o wordmark sem N duplicado
w = Math.round((h * 555) / 200)   ← fórmula de largura responsiva

Polígonos (símbolo N em azul #2563EB):
  left bar:  points="39,55  53,55  45,145  31,145"
  right bar: points="113,55 127,55 119,145 105,145"
  diagonal:  points="46.9,58.5 59.1,51.5 111.1,141.5 98.9,148.5"

Texto:
  <tspan x="133" fill="currentColor">ext</tspan>   ← "ext" (não "Next")
  <tspan fill="#2563EB">AI</tspan>
```

### Regra crítica do logo

O símbolo geométrico (3 polígonos) representa visualmente a letra **N**.  
O texto começa em `"ext"` (não `"Next"`) para que o conjunto leia **NextAI**.

**NÃO alterar para `"Next"`** — isso cria o wordmark `"NNextAI"` (N duplicado):
```
❌ <tspan x="...">Next</tspan>   →  símbolo-N + texto-N-ext-AI = "NNextAI"
✅ <tspan x="133">ext</tspan>    →  símbolo-N + texto-ext-AI  = "NextAI"
```

### Parâmetros de posicionamento

| Variável | Valor atual | Significado |
|---|---|---|
| `x` do tspan | 133 | Início do "ext" — 6 unidades à direita do símbolo (x≈127) |
| `viewBox` width | 555 | 640 − N_advance(68) − shift(17) |
| `height` Navbar/Footer | 28 px | Não alterar sem ajustar navbar height |

### Variant 'symbol'

Usada somente quando necessário o símbolo isolado. `viewBox="0 0 152 162"`, 3 polígonos sem texto.

---

## Sistema de animações (index.css)

Todas as animações são definidas em `src/index.css`. Usar as classes utilitárias — nunca reescrever keyframes inline.

### Animações de float (elementos flutuantes)

```css
.hero-float       → float 5s ease-in-out infinite (floating cards do HeroMock)
.hero-float-slow  → float 7s ease-in-out infinite
.hero-float-late  → float 5s 2.8s infinite (aparece depois)
.pulse-dot        → pulse-dot 2s ease-in-out infinite (pontos vivos)
```

### Sistema visual de IA

```css
.orb-spin         → rotate 360deg, 16s linear (anel externo da AiOrb)
.orb-spin-r       → rotate -360deg, 22s linear (anel médio, reverso)
.orb-drift        → translateY -14px + scale 1.03, 7s (core da orb)
.scan-sweep       → varre top 0→100%, 4.5s, delay 1s (linha de scan do HeroMock)
.ring-expand      → scale 0.9→2.8 + fade out, 2.4s (sonar rings do KPI SLA)
.wave-bar         → scaleY 0.15→1, 0.75s, transform-origin:bottom (barras de áudio)
.particle-up      → translateY -60px + fade, duração variável (partículas da orb)
```

### Gradient text

```css
.text-gradient-primary   → gradient primary→ai em clip de texto
```

**Uso:**
```tsx
<span className="text-gradient-primary">texto em gradiente</span>
```

### Regras de animação

- Todos os elementos animados têm `will-change` declarado na classe (GPU compositing)
- `wave-bar` usa `transform-origin: bottom` — barras crescem de baixo para cima
- `.glass`, `.glow-primary`, `.glow-ai` foram **removidos** (dead code) — não recriar
- `@keyframes data-appear` e `shimmer-move` foram **removidos** — não recriar

---

## MobileCtaBar

`src/sections/MobileCtaBar.tsx` — sticky CTA bar fixa no rodapé em mobile.

- Aparece após 420px de scroll
- `lg:hidden` — invisível em desktop
- `env(safe-area-inset-bottom)` — compatível com iPhone notch
- Renderizada em `App.tsx` após `<Footer />`
- **Não remover** — é o único CTA primário acessível em mobile durante o scroll

---

## Armadilhas do redesign (não repetir)

31. **Logo N duplicado** → símbolo geométrico JÁ É o N. O tspan deve ser `"ext"`, nunca `"Next"`. Alterar para "Next" cria "NNextAI".

32. **wave-bar + transform inline conflitam** → a animação CSS `wave-bar` usa `transform: scaleY()`. Se o elemento também tiver `transform: scaleY(h)` no inline style, a animação sobrescreve o inline no CSS cascade. Para barras de áudio com alturas variadas: usar `height: ${h}%` + `items-end` no container. Nunca usar `transform` inline em elemento com `wave-bar`.

33. **ring-expand como sonar** → `ring-expand` deve ser aplicado a um elemento com `border` (não `background`). Com `background`, o efeito é um retângulo sólido que cresce — não um anel. Usar `border: 1px solid rgba(240,64,64,0.5)` + `rounded-full`. Em Tailwind v4, `-translate-x-1/2 -translate-y-1/2` usa a CSS property `translate` (separada de `transform`), portanto não conflita com a animação `ring-expand` que usa `transform: scale()`.

34. **SVG `<g>` transform cross-browser** → ao animar `<g>` em SVG com CSS `transform: rotate()`, sempre adicionar `transformBox: 'view-box'` junto com `transformOrigin`. Sem `transformBox`, Firefox e Safari podem calcular a origem em coordenadas diferentes, quebrando a órbita do anel.

35. **Floating cards do HeroMock causam horizontal scroll em mobile** → os cards `absolute` com offset negativo (`-left-6`, `-right-4`) transbordam o container. Em mobile, usar `hidden sm:block` nos cards flutuantes. No container pai, usar `overflow-x-clip lg:overflow-visible`.

36. **SVG filter IDs globais colidem** → IDs como `<filter id="gp">` são globais no DOM. Em re-renders ou HMR, múltiplos SVGs com o mesmo ID causam comportamento imprevisível. Usar `useId()` do React e sanitizar os colons: `const uid = useId().replace(/:/g, '_')`. Referenciar como `filter={`url(#${uid}_gp)`}`.

37. **OG Image em SVG não funciona em redes sociais** → Facebook, Instagram, LinkedIn e Twitter não indexam SVG como OG image. O arquivo deve ser PNG ou JPEG, 1200×630px. A referência em `index.html` já foi corrigida para `/og-image.png` — só falta gerar o arquivo de imagem real.

---

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
