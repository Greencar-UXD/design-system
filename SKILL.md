---
name: cobalt-mono-design
description: Use this skill to generate well-branded interfaces and assets for the Daniel's Design System (monochrome surfaces + a single cobalt accent, Pretendard type, Korean+English, light & dark), either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files. (한국어 가이드는 `README.ko.md`를 참고하세요 — 영문 `README.md`와 내용은 동일합니다.)
If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.
If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Quick reference
- **Entry CSS:** link `styles.css` (imports all tokens + component styles).
- **Showcase:** open `index.html` (overview) and `gallery/{foundations,atoms,molecules,organisms}.html` — static, no build step.
- **Components:** import from source — `import { Button, Card, Input } from "./components";` (or per-file `./components/atoms/Button.jsx`). Standard React; the consuming app's bundler handles JSX. No runtime bundle.
- **Dark mode:** set `data-theme="dark"` on `<html>` or any ancestor; components flip automatically.
- **Accent discipline:** ink (`--gray-900`) is primary; cobalt (`--accent`) is reserved for links, focus, selected states, and the single most important CTA per view.
- **Type:** Pretendard single family for everything (display → data); numbers use tabular figures. No emoji.
- **Icons:** Lucide (monoline, stroke 2), inherit `currentColor`.
