# Cobalt — Mono Design System

**Language / 언어: [English](./README.md) · 한국어 (현재 파일)**

무채색(모노톤)을 기본으로 하고, 단 하나의 시그니처 포인트 컬러(**Cobalt `#2D5BFF`**)를 쓰는 디자인 시스템입니다. 개인 포트폴리오/웹사이트와 모바일 서비스 화면 프로토타이핑을 위해 만들었습니다. 라이트 모드가 기본이며, 다크 모드도 완전히 지원합니다. 한글과 영문이 모두 1급 시민이에요 — 전체 타입 시스템이 한 패밀리로 두 문자를 모두 커버하는 **Pretendard** 위에서 돌아갑니다.

> **출처 / 기원:** 처음부터 새로 제작(기존 코드베이스·Figma·브랜드 가이드 없음). 최초에 첨부됐던 `design-system/` 로컬 폴더가 비어 있어서, 모든 기반을 새로 작성하고 사용자와 단계별로(폰트 → 컬러 → 컴포넌트) 확정했습니다. 추후 실제 코드베이스나 브랜드가 생기면 이 토큰부터 맞춰 조정하세요.

---

## 콘텐츠 기본 원칙 (Content fundamentals)

시스템 전반의 카피 작성 방식. 모든 화면·카드·컴포넌트에서 일관되게 유지하세요.

- **이중 언어, 제품 UI는 한글 우선.** UI 라벨과 본문은 기본 한글, 영문은 보조/디스플레이 텍스트·제품명·기술 용어로 등장합니다. 둘 다 Pretendard로 set 되어 깔끔하게 어울려요. 예: 히어로 문구 `Build with clarity` / `명료하게 만든다`.
- **톤: 명료하고, 자신감 있고, 차분하게.** 평이하고 직접적으로 — 과장·세일즈 말투는 금지. 형용사보다 동사·구체 명사. "지금 바로 놀라운 경험을!"이 아니라 "작업을 시작하세요".
- **인칭:** 안내문에서는 사용자를 **당신·~하세요**로 부르고, 포트폴리오에서 제작자는 1인칭("제가 만든 것들")으로 말합니다. 팀을 대표하는 경우가 아니면 기업적 "우리(we)"는 피하세요.
- **대소문자:** 영문 디스플레이/제목은 **Sentence case**("Build with clarity"), Title Case 아님. 한글은 대소문자가 없으니 굵기·크기로 위계를 잡습니다. UPPERCASE는 자간을 넓힌(`--ls-caps`) 작은 eyebrow/overline 라벨에만 (예: `TYPOGRAPHY`).
- **숫자·데이터**는 **Geist Mono**의 tabular figures로 (가격·퍼센트·통계·코드). 의도된 질감 신호예요: 모노 = 데이터/정밀함.
- **이모지 없음.** 브랜드 보이스는 절제돼 있습니다. 상태·강조는 배지·색·굵기로 표현하고 이모지로는 하지 않습니다. 인라인 어포던스 신호로 유니코드 화살표(`→`, `↗`)는 허용.
- **문장부호:** 짧은 UI 문자열에서 한글은 마침표를 생략할 수 있고, 영문은 표준 문장부호를 따릅니다. 부연에는 en-dash `–`/em-dash `—`를 절제해서 사용.
- **길이:** 헤드라인은 짧게(영문 6단어 이하). 본문은 간결하게, 문단당 하나의 생각. 버튼은 1~2단어("시작하기", "더 보기", "Save").

---

## 비주얼 기반 (Visual foundations)

룩앤필: **무채색 표면, 잉크색 텍스트, 절제해서 쓰는 코발트 포인트 하나.** 조용하고 정밀하게 — 콘텐츠(작업·제품)가 주인공이고, 시스템은 뒤로 빠집니다.

- **컬러.** 쿨한 기운의 뉴트럴 램프(`--gray-0 … --gray-950`)가 모든 화면의 95%를 차지합니다. **잉크**(`--gray-900`)가 주 텍스트이자 기본 버튼 채움색. **코발트**(`--cobalt-500`, 다크에서는 `#5B7CFF`로 한 톤 밝게)는 단일 액센트 — 링크·포커스 링·선택/활성 상태, 그리고 화면당 가장 중요한 CTA 하나에만 씁니다. 액센트로 화면을 도배하지 마세요. 상태색(녹/주황/빨강)은 배지와 피드백에만 등장합니다.
- **테마.** 라이트가 `:root` 기본, 다크는 `[data-theme="dark"]`에서 시맨틱 토큰을 덮어씁니다. 컴포넌트는 시맨틱 토큰(`--text-primary`, `--surface-card`, `--border`, `--accent`)을 읽기 때문에 자동으로 전환돼요 — 컴포넌트별 다크 CSS 불필요.
- **타입.** 전부 Pretendard(디스플레이 → 캡션), 데이터는 Geist Mono. 디스플레이/제목은 자간을 좁게(`--ls-tight`/`--ls-tighter`), 본문은 중립. 굵기: 400/500/600/700. 위계는 색이 아니라 크기 + 굵기로.
- **스페이싱 & 레이아웃.** 엄격한 **4px 기준 그리드**(`--space-*`: 4·8·12·16·20·24·28·32·40·48·64·80·96). Radius도 4px 그리드 위에 있습니다(`--radius-*`: 4·8·12·16·20·28). 모든 컴포넌트의 padding/gap/margin은 그리드에 스냅됩니다. 의도적으로 그리드를 벗어나는 값은 헤어라인 보더(1px), 포커스/센터링 오프셋(2px), 아이콘 글리프 크기, 44px 터치 타깃뿐입니다. 여백은 넉넉하게, 웹 콘텐츠 최대 폭은 1100~1240px 정도. 마진 체인 대신 flex/grid + `gap`을 쓰세요.
- **반응형 & 모바일.** **모바일 우선(mobile-first).** 5단 브레이크포인트 사다리(`--bp-sm 480 · --bp-md 768 · --bp-lg 1024 · --bp-xl 1280`)와 콘텐츠 최대 폭(`--content-narrow 720 / --content-max 1120 / --content-wide 1240`)이 `tokens/breakpoints.css`에 있습니다. 페이지 거터는 폭에 따라 **16 → 24 → 32**로 단계 변화(`--gutter`). 디스플레이 타입은 폰(≤ 640px)에서 자동으로 한 단계 작아집니다(display 40→32, h1 36→30, h2 32→26, h3 28→22). 본문·라벨·데이터 크기는 가독성을 위해 고정. 터치 타깃은 **44px 이상**(`--touch-min`, 주요 액션은 `--touch-comfortable` 48px). 화면 가장자리에 붙는 컴포넌트(BottomNav·BottomSheet·Drawer)는 노치/홈 인디케이터를 위해 `env(safe-area-inset-*)`(`--safe-*`)로 패딩을 더합니다 — 노치 없는 기기엔 영향 0. 중앙 정렬·거터 자동 콘텐츠 칼럼은 **`.ds-container`**(`--narrow`/`--wide`/`--fluid` 변형), 직접 만든 고정 바에는 `.ds-safe-*`, 히트 영역 보장에는 `.ds-touch`를 쓰세요. 참고: CSS `@media`는 `var()`를 읽지 못하므로 `css/responsive.css`의 `@media` 리터럴 값은 브레이크포인트 토큰과 동기화해 유지합니다. `foundations/responsive.html` 참고.
- **모서리 둥글기.** 컨테이너는 부드럽되 과하지 않게: 입력/버튼 `--radius-md`(12px), 카드 `--radius-xl`(20px). 완전한 pill(`--radius-pill`)은 배지·태그·스위치·아바타에만.
- **보더.** 헤어라인 `--border`(1px, `--gray-200`)가 기본 구분선. 입력·강조에는 `--border-strong`. 구조는 보더가 잡고, 그림자는 은은하게 유지.
- **그림자 / 엘리베이션.** 부드럽고 쿨하며 퍼짐이 적게(`--shadow-xs … --shadow-xl`). 카드는 평소 `--shadow-sm`, hover 시 `--shadow-lg`로 띄움. 딱딱하거나 컬러가 들어간 그림자는 금지.
- **배경.** 단색 평면만 — 뒤는 `--surface-page`(오프화이트), 카드는 `--surface-card`(화이트). **그라데이션·장식용 블롭·텍스처 없음.** 다크 모드는 거의 검정 `#0d0f12` 페이지 / `#16181d` 카드.
- **이미지.** 실제 사진/작업물은 둥근 카드(`--radius-xl`) 안에 풀블리드로, 쿨/뉴트럴 톤 선호. 실제 에셋이 오기 전엔 플레이스홀더(이미지 슬롯)를 쓰고, 장식 이미지를 임의로 생성하지 마세요.
- **모션.** 빠르고 절제되게. hover에 `--dur-fast`(120ms), 토글/스위치에 `--dur-base`(200ms), 대부분 `--ease-out`, 양방향엔 `--ease-in-out`. 바운스나 출렁이는 오버슈트 없음.
- **Hover 상태:** ghost/secondary는 은은한 배경 채움(`--surface-sunken`), 솔리드 채움은 한 단계 어둡게(`--action-primary-bg-hover`, `--accent-hover`), 카드는 `translateY(-2px)` + 더 깊은 그림자.
- **Press 상태:** 살짝 `scale(.985~.94)` 축소. **Focus:** 항상 보이는 2px 코발트 링(`--focus-ring`) + 2px 오프셋 — 절대 제거하지 않음.
- **투명도 / 블러:** 드물게만 — 포커스 링이 반투명 코발트 헤일로(`color-mix`)를 씁니다. 기본적으로 글래스모피즘은 안 씁니다.

---

## 아이코노그래피 (Iconography)

- **시스템: [Lucide](https://lucide.dev)** — 깔끔한 모노라인 아이콘, 1.5~2px 스트로크, 둥근 캡/조인. 채움형이나 듀오톤보다 무채색·정밀한 톤에 잘 맞습니다.
  - **대체 표기:** 처음부터 새로 만든 시스템이라(코드베이스 아이콘셋 없음) 무채색 미학에 가장 가까운 Lucide를 선택했습니다. 선호하는 아이콘셋이 있으면 여기서 교체하세요.
- **사용:** 아이콘은 `currentColor`를 상속하고 텍스트/버튼 대비 `em` 단위로 크기를 잡습니다. 기본 스트로크 `2`, 색 `--text-secondary`(장식·입력 선행 아이콘은 `--text-tertiary`). 활성/선택 아이콘은 `--text-primary` 또는 `--accent`.
- **전달 방식:** HTML 스페시먼·프로토타입에서는 Lucide SVG path를 인라인(stroke, fill:none)하거나 CDN으로 로드. 컴포넌트 코드(Button, IconButton 등)는 `icon` prop으로 아이콘 노드를 받습니다 — Lucide `<svg>`를 넘기세요.
- **이모지를 아이콘으로 쓰지 않음. PNG 아이콘도 안 씀.** 인라인 유니코드 화살표(`→ ↗ ←`)는 허용.
- **에셋:** 로고/마크는 `assets/` 참고 (실제 로고가 오기 전까지는 플레이스홀더 lockup).

---

## 쇼케이스 (Showcase)

루트의 **`index.html`**을 열면 라이브 쇼케이스가 뜹니다 — 빌드 단계 없음. 아래 4개 페이지를 연결하며, 각 페이지에 라이트/다크 토글이 있습니다:

- **`index.html`** — 개요: 히어로, 토큰 미리보기, 사용법.
- **`gallery/foundations.html`** — 모든 파운데이션 스페시먼(타입·컬러·스페이싱·모션·레이아웃·가이드·브랜드).
- **`gallery/atoms.html`** · **`gallery/molecules.html`** · **`gallery/organisms.html`** — 각 컴포넌트의 핵심 상태를 실제 `.ds-*` 클래스로 렌더.

파운데이션 페이지는 스페시먼을 `<iframe>`으로 임베드하므로, 로컬에서 정확히 보려면 정적 서버로 여세요:

```bash
npx serve .        # 또는:  python3 -m http.server
```

---

## 인덱스 / 매니페스트 (Index)

루트 파일:
- **`styles.css`** — 소비자가 링크하는 단일 진입점. 아래 토큰·컴포넌트 CSS를 `@import`.
- **`tokens/`** — `fonts.css`(Pretendard + Geist Mono `@font-face`), `colors.css`(뉴트럴 + 코발트 램프, 라이트/다크 시맨틱), `typography.css`(패밀리·스케일·굵기·행간·자간), `spacing.css`(스페이싱 그리드·radius·그림자·모션), `breakpoints.css`(브레이크포인트 사다리·콘텐츠 폭·거터·터치·safe-area).
- **`css/components.css`** — 클래스 기반, 토큰 구동 컴포넌트 스타일(`.ds-*`), 다크 자동 대응.
- **`css/responsive.css`** — 모바일 우선 `@media` 레이어: 거터 리맵, 폰에서 디스플레이 타입 축소, `.ds-container`/`.ds-safe-*`/`.ds-touch` 유틸, 고정 바 safe-area 패딩.
- **`package.json`** — 패키지 메타데이터 + `exports` 맵(소스를 그대로 배포; 빌드 단계 없음). **`.gitignore`**.
- **`README.md`** / **`README.ko.md`** — 가이드(영문 / 한글). **`SKILL.md`** — Agent Skill 매니페스트.
- **`index.html`** + **`gallery/`** — 쇼케이스(위 참고).

파운데이션 스페시먼 카드 — **`foundations/`** (`gallery/foundations.html`에서도 렌더):
- Type: `type-scale`, `type-display`, `type-weights`, `type-mono`
- Colors: `colors-neutral`, `colors-cobalt`, `colors-semantic-light`, `colors-dark`, `colors-status`, `chart-palette`
- Spacing: `spacing-scale`, `radius-scale`, `shadow-scale`
- Motion: `motion` · Layout: `grid-layout`, `responsive`
- Guidelines: `accessibility`, `do-dont`, `voice`
- Brand: `iconography`, `assets/wordmark`

컴포넌트 — **`components/`**, **아토믹 디자인** 레벨로 구성 — 총 37개. 각 레벨에 배럴 `index.js`가 있고, 루트 `components/index.js`가 전체를 다시 export 합니다.

- **`atoms/`** (16) — 더 쪼갤 수 없는 프리미티브: **Button, IconButton, Input, Textarea, Select, Checkbox, Radio, Switch, Slider, Badge, Tag, Avatar, Divider, Skeleton, Spinner, Progress**
- **`molecules/`** (16) — 원자들의 작은 조합: **Card, Stat, Accordion, EmptyState, Alert, Toast, Tabs, SegmentedControl, Breadcrumb, Pagination, Stepper, Menu, Tooltip, AppBar, BottomNav, ListRow**
- **`organisms/`** (5) — 복합·조합된 큰 단위: **Dialog, Drawer, Popover, BottomSheet, Table**

각 컴포넌트는 `<Name>.jsx` + `<Name>.d.ts`(props) + `<Name>.prompt.md`(사용법)로 구성됩니다.

_UI 킷(실제 제품 화면 전체 재현)은 의도적으로 아직 만들지 않았습니다 — 지금은 시스템 자체(토큰 + 컴포넌트 + 문서)에 집중._

---

### 참고: 사용법

이 시스템은 **소스를 그대로** 배포합니다 — 컴파일러나 런타임 번들이 없습니다. CSS는 한 번 링크하고, 컴포넌트는 소스에서 바로 import 하세요(JSX는 앱의 번들러 — Vite, Next 등 — 가 처리합니다):

```jsx
// 1) 스타일 — 앱 루트에서 한 번만
import "cobalt-mono-design-system/styles.css";
//   순수 HTML 대안:  <link rel="stylesheet" href="styles.css">

// 2) 컴포넌트 — 배럴에서, 또는 개별 파일에서
import { Button, Card, Dialog } from "./components";
import { Switch } from "./components/atoms/Switch.jsx";

function Example() {
  return <Button variant="primary">저장하기</Button>;
}
```

다크 모드는 `<html>`(또는 임의의 상위 요소)에 `data-theme="dark"`를 설정하세요 — 컴포넌트가 시맨틱 토큰을 통해 자동 전환됩니다.

> **Claude Design 익스포트에서 마이그레이션하나요?** 기존 `_ds_bundle.js` / `window.DesignSystem_d67542` 런타임은 사라졌습니다(Claude Design 컴파일러가 생성하던 것). 위의 직접 import를 쓰세요 — 컴포넌트 소스는 표준 React이며 변경되지 않았습니다.
