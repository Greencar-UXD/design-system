# Cobalt — Mono Design System

**Language / 언어: English (this file) · [한국어](./README.ko.md)**

A monochrome-first design system with a single signature accent (**Cobalt `#2D5BFF`**), built for a personal portfolio / website and for prototyping mobile service screens. Light mode is the base; full dark mode is supported. Korean + English are first-class — the entire type system runs on **Pretendard**, which covers both scripts in one family.

> **Sources / origin:** Built from scratch (no prior codebase, Figma, or brand guide). The originally-attached `design-system/` local folder read as empty, so all foundations were authored fresh and confirmed with the user step by step (font → color → components). If a real codebase or brand later appears, reconcile tokens here first.

---

## Content fundamentals

How copy is written across the system. Keep it consistent in every screen, card, and component.

- **Bilingual, Korean-led for product UI.** UI labels and body copy default to Korean; English appears as supporting/display text, product names, and technical terms. Both are set in Pretendard so they sit together cleanly. Example: a hero reads `Build with clarity` / `명료하게 만든다`.
- **Tone: clear, confident, calm.** Plain and direct, never hype-y or salesy. Prefer verbs and concrete nouns over adjectives. "작업을 시작하세요" over "지금 바로 놀라운 경험을!".
- **Person:** Address the user as **you / 당신·~하세요** in instructions; speak about the maker in first person on the portfolio ("제가 만든 것들"). Avoid corporate "we" unless representing a team.
- **Casing:** English display/headings use **Sentence case** ("Build with clarity"), not Title Case. Korean has no casing — rely on weight and size for hierarchy. UPPERCASE is reserved for tiny eyebrow/overline labels with wide tracking (`--ls-caps`), e.g. `TYPOGRAPHY`.
- **Numbers & data** are set in **Pretendard with tabular figures** (`font-variant-numeric: tabular-nums`) — prices, percentages, stats, code. Single family throughout; alignment comes from tabular figures, not a separate mono face.
- **No emoji.** The brand voice is restrained; status and emphasis come from badges, color, and weight — not emoji. Unicode arrows (`→`, `↗`) are allowed as inline affordance cues.
- **Punctuation:** Korean sentences may omit terminal periods in short UI strings; English follows standard punctuation. Use the en-dash `–`/em-dash `—` sparingly for asides.
- **Length:** Headlines short (≤ 6 words EN). Body copy concise; one idea per paragraph. Buttons are 1–2 words ("시작하기", "더 보기", "Save").

---

## Visual foundations

The look: **monochrome surfaces, ink text, one cobalt accent used sparingly.** Quiet and precise — the content (work, product) is the hero; the system gets out of the way.

- **Color.** Cool-leaning neutral ramp (`--gray-0 … --gray-950`) carries 95% of every screen. **Ink** (`--gray-900`) is the primary text and the primary button fill. **Cobalt** (`--cobalt-500`, lifted to `#5B7CFF` in dark) is the single accent — reserved for links, focus rings, selected/active states, and the one most-important CTA per view. Never flood a screen with accent. Status colors (green/amber/red) appear only in badges and feedback.
- **Themes.** Light is the base on `:root`; dark overrides semantic tokens under `[data-theme="dark"]`. Components read semantic tokens (`--text-primary`, `--surface-card`, `--border`, `--accent`) so they flip automatically — no per-component dark CSS.
- **Type.** Pretendard for everything (display → caption); numeric/data uses the same family with tabular figures (`tabular-nums`). Tight tracking on display/headings (`--ls-tight`/`--ls-tighter`), neutral on body. Weights: 400/500/600/700. Hierarchy comes from size + weight, not color.
- **Spacing & layout.** Strict **4px base grid** (`--space-*`: 4·8·12·16·20·24·28·32·40·48·64·80·96). Radius is also on the 4px grid (`--radius-*`: 4·8·12·16·20·28). All component padding/gap/margin snap to the grid; the only deliberate off-grid values are hairline borders (1px), focus/centering offsets (2px), icon glyph sizing, and the 44px touch target. Generous whitespace; content max-widths around 1100–1240px on web. Use flex/grid with `gap` — never margin chains.
- **Responsive & mobile.** **Mobile-first.** A five-stop breakpoint ladder (`--bp-sm 480 · --bp-md 768 · --bp-lg 1024 · --bp-xl 1280`) and content caps (`--content-narrow 720 / --content-max 1120 / --content-wide 1240`) live in `tokens/breakpoints.css`. Page gutters step **16 → 24 → 32** (`--gutter`, remapped per breakpoint). Display type auto-scales down on phones (≤ 640px: display 40→32, h1 36→30, h2 32→26, h3 28→22) while body/labels/data stay fixed for legibility. Touch targets are **≥ 44px** (`--touch-min`; `--touch-comfortable` 48px for primary actions). Edge-anchored components (BottomNav, BottomSheet, Drawer) pad for notches/home-indicators via `env(safe-area-inset-*)` (`--safe-*`) — zero-impact on non-notched devices. Use **`.ds-container`** for the centered, gutter-aware column (`--narrow`/`--wide`/`--fluid` modifiers), `.ds-safe-*` helpers for your own fixed bars, and `.ds-touch` to guarantee a hit area. Note: CSS `@media` can't read `var()`, so the `@media` literals in `css/responsive.css` are kept in sync with the breakpoint tokens. See `foundations/responsive.html`.
- **Corner radii.** Soft but not pill-y for containers: inputs/buttons `--radius-md` (12px), cards `--radius-xl` (20px). Pills (`--radius-pill`) only for badges, tags, switches, and avatars.
- **Borders.** Hairline `--border` (1px, `--gray-200`) is the default separator. `--border-strong` for inputs and emphasis. Borders do the structural work; shadows stay subtle.
- **Shadows / elevation.** Soft, cool, low-spread (`--shadow-xs … --shadow-xl`). Cards rest on `--shadow-sm`; raise to `--shadow-lg` on hover. No hard or colored drop shadows.
- **Backgrounds.** Flat color only — `--surface-page` (off-white) behind, `--surface-card` (white) for cards. **No gradients, no decorative blobs, no textures.** Dark mode uses near-black `#0d0f12` page / `#16181d` cards.
- **Imagery.** Treat real photography/work as full-bleed within rounded cards (`--radius-xl`), cool/neutral grade preferred. Use placeholders (image slots) until real assets are supplied — never generate decorative imagery.
- **Motion.** Quick and understated. `--dur-fast` (120ms) for hovers, `--dur-base` (200ms) for toggles/switches, `--ease-out` for most, `--ease-in-out` for two-way. No bounces or springy overshoot.
- **Hover states:** subtle background fill (`--surface-sunken`) for ghost/secondary; one step darker for solid fills (`--action-primary-bg-hover`, `--accent-hover`); cards lift `translateY(-2px)` + deeper shadow.
- **Press states:** slight `scale(.985–.94)` shrink. **Focus:** always a visible 2px cobalt ring (`--focus-ring`) with 2px offset — never removed.
- **Transparency / blur:** used rarely — focus rings use a translucent cobalt halo (`color-mix`). No glassmorphism by default.

---

## Iconography

- **System: [Lucide](https://lucide.dev)** — clean monoline icons, 1.5–2px stroke, rounded caps/joins. This matches the monochrome, precise tone better than filled or duotone sets.
  - **Substitution flag:** because this system was built from scratch (no codebase icon set), Lucide was chosen as the closest fit to the monochrome aesthetic. If you have a preferred icon set, swap it here.
- **Usage:** icons inherit `currentColor` and are sized in `em` relative to the text/button. Default stroke `2`, color `--text-secondary` (or `--text-tertiary` for decorative/leading-in-field). Active/selected icons take `--text-primary` or `--accent`.
- **Delivery:** in HTML specimens and prototypes, inline the Lucide SVG paths (stroke, fill:none) or load Lucide from CDN. Component code (Button, IconButton, etc.) accepts any icon node via an `icon` prop — pass a Lucide `<svg>`.
- **No emoji as icons. No PNG icons.** Unicode arrows (`→ ↗ ←`) are acceptable inline.
- **Assets:** see `assets/` for logos/marks (placeholder lockups until a real logo is supplied).

---

## Showcase

Open **`index.html`** at the repo root for the live showcase — no build step. It links four pages, each with a light/dark toggle:

- **`index.html`** — overview: hero, token taster, usage.
- **`gallery/foundations.html`** — every foundation specimen (type, color, spacing, motion, layout, guidelines, brand).
- **`gallery/atoms.html`** · **`gallery/molecules.html`** · **`gallery/organisms.html`** — every component in its key states, rendered with the real `.ds-*` classes.

The foundations page embeds specimens via `<iframe>`, so for a fully accurate local view, serve the folder statically:

```bash
npx serve .        # or:  python3 -m http.server
```

---

## Index / manifest

Root files:
- **`styles.css`** — the single entry point consumers link. `@import`s the token + component CSS below.
- **`tokens/`** — `fonts.css` (Pretendard `@font-face`), `colors.css` (neutral + cobalt ramps, light/dark semantic), `typography.css` (families, scale, weights, leading, tracking), `spacing.css` (space grid, radius, shadow, motion), `breakpoints.css` (breakpoint ladder, content widths, gutters, touch, safe-area).
- **`css/components.css`** — class-based, token-driven component styles (`.ds-*`), auto-adapting to dark.
- **`css/responsive.css`** — mobile-first `@media` layer: live gutter remap, display-type down-scale on phones, `.ds-container`/`.ds-safe-*`/`.ds-touch` utilities, safe-area padding for fixed bars.
- **`package.json`** — package metadata + `exports` map (ships source; no build step). **`.gitignore`**.
- **`README.md`** / **`README.ko.md`** — this guide (EN / KO). **`SKILL.md`** — Agent Skill manifest.
- **`index.html`** + **`gallery/`** — the showcase (above).

Foundations specimen cards — **`foundations/`** (also rendered in `gallery/foundations.html`):
- Type: `type-scale`, `type-display`, `type-weights`, `type-mono`
- Colors: `colors-neutral`, `colors-cobalt`, `colors-semantic-light`, `colors-dark`, `colors-status`, `chart-palette`
- Spacing: `spacing-scale`, `radius-scale`, `shadow-scale`
- Motion: `motion` · Layout: `grid-layout`, `responsive`
- Guidelines: `accessibility`, `do-dont`, `voice`
- Brand: `iconography`, `assets/wordmark`

Components — **`components/`**, organized by **atomic design** level — 37 components. Each level has a barrel `index.js`; the root `components/index.js` re-exports everything.

- **`atoms/`** (16) — indivisible primitives: **Button, IconButton, Input, Textarea, Select, Checkbox, Radio, Switch, Slider, Badge, Tag, Avatar, Divider, Skeleton, Spinner, Progress**
- **`molecules/`** (16) — small compositions of atoms: **Card, Stat, Accordion, EmptyState, Alert, Toast, Tabs, SegmentedControl, Breadcrumb, Pagination, Stepper, Menu, Tooltip, AppBar, BottomNav, ListRow**
- **`organisms/`** (5) — complex, composed pieces: **Dialog, Drawer, Popover, BottomSheet, Table**

Each component ships `<Name>.jsx` + `<Name>.d.ts` (props) + `<Name>.prompt.md` (usage).

_UI kits (full product-screen recreations) are intentionally not built yet — the focus is the system itself (tokens + components + docs)._

---

### Reference: usage

This system ships **source** — there is no compiler or runtime bundle. Link the CSS once, then import components from source (your app's bundler — Vite, Next, etc. — handles the JSX):

```jsx
// 1) Styles — once, at your app root
import "cobalt-mono-design-system/styles.css";
//   plain HTML alternative:  <link rel="stylesheet" href="styles.css">

// 2) Components — from the barrel, or per-file
import { Button, Card, Dialog } from "./components";
import { Switch } from "./components/atoms/Switch.jsx";

function Example() {
  return <Button variant="primary">저장하기</Button>;
}
```

For dark mode, set `data-theme="dark"` on `<html>` (or any ancestor) — components flip automatically via semantic tokens.

> **Migrating from the Claude Design export?** The old `_ds_bundle.js` / `window.DesignSystem_d67542` runtime is gone (Claude Design's compiler generated it). Use the direct imports above — the component source is standard React and unchanged.
