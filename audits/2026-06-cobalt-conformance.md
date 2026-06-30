# Cobalt — Mono 디자인 시스템 적합성 감사

**일자:** 2026-06-26 · **기준(canon):** `Greencar-UXD/design-system` (Cobalt — Mono, accent `#2D5BFF`)
**범위:** 연결된 6개 레포의 웹 디자인 산출물 → career · crewfit · dilettantisme · grandfather · (skills는 디자인 산출물 아님) · design-system 자체
**방법:** 8개 감사 유닛을 병렬로 정전(canon) 대조 → **고심각·의심 항목 33건을 적대적(refute 우선) 재검증** → 거짓양성/심각도 정정 반영. (총 41 에이전트, 69 발견)

> 재검증으로 **3건 거짓양성(refuted)**, 다수 항목 심각도 정정(partial)됨. 아래 심각도는 **재검증 후 최종값**.

---

## 1. 종합 스코어카드

| 유닛 | 등급 | 발견 | 재검증 후 Critical/High | 핵심 이슈 |
|---|---|---:|---|---|
| **career** / shared-css | 🟠 mixed | 14 | High 4 | `landing.css`가 마지막 로드로 모든 공유 셀렉터를 덮어씀 — 하드코딩 팔레트 드리프트 + 히어로 그라데이션 + CTA 코발트 도배 |
| **career** / case-pages (13) | 🟢 strong | 6 | High 1 | 케이스 페이지가 포커스 링 정의(`landing.css`)를 로드 안 함 → 캐논 2px 코발트 링 부재 |
| **career** / doc-pages (4) | 🟠 mixed | 11 | (High→Med 1) | 모바일 리플로우/거터 스텝다운 없음, 본문 15px(캐논 16), 반절-픽셀 사이즈 다수 |
| **crewfit** / app | 🟠 mixed | 11 | High 2 | 클럽별 멀티-휴 팀컬러(2차 브랜드색), 히어로 그라데이션×2, 본문 14px |
| **dilettantisme** / fork-drift | 🟡 good | 4 | High 2 | 포크된 `cobalt/`가 **반응형 표준 누락**(breakpoints.css·responsive.css 부재) — 복사된 파일은 byte-identical |
| **dilettantisme** / app | 🟡 good | 7 | High 1 | 반응형 레이어 미적용 + 자체 880px 단일 브레이크포인트, `viewport-fit=cover`인데 safe-area 패딩 없음 |
| **grandfather** / a11y-app | 🟡 good | 9 | High 1 | `privacy.html`이 **잘못된 액센트 블루 `#0b66ff`**(코발트 아님), 큰글씨/고대비는 정당한 a11y 이탈로 인정 |
| **design-system** / self | 🟢 strong | 7 | High 1 | radius 스페시먼이 옛 값(6/10/14) 표기, README globe 이모지(자체 규칙 위반), 토큰 카운트 불일치 — **본 세션에서 수정 완료** |

**전반:** 토큰 아키텍처(컬러 램프·4px 그리드·시맨틱 별칭·그림자·모션)는 거의 모든 레포가 캐논을 충실히 복사해 **기반은 탄탄**. 위반은 (a) **반응형 표준 미적용**, (b) **랜딩/히어로 표면의 색 규율 이탈**(그라데이션·액센트 도배·2차 브랜드색), (c) **4px 그리드/타입 스케일 이탈**에 집중.

---

## 2. 횡단 패턴 (cross-cutting)

1. **반응형 표준 미적용 (최다·최중요)** — 거의 모든 소비 레포가 캐논의 새 반응형 표준(브레이크포인트 480/768/1024/1280, `--content-*`, `--gutter` 스텝, ≤640px 타입 다운스케일, `.ds-container`, safe-area)을 쓰지 않고 **각자 단일 브레이크포인트**(career 900/520, crewfit·dilettantisme 880, grandfather 700)를 굴림. dilettantisme 포크는 반응형 파일 자체가 **부재**.
2. **하드코딩 hex 드리프트** — career `landing.css`(`--ink:#1B2430` vs 캐논 `#14171b`), grandfather `privacy.html`(`#0b66ff` vs 코발트 `#2d5bff`)가 토큰을 참조하지 않고 평행 팔레트를 재선언.
3. **색 규율 이탈(랜딩/히어로)** — 그라데이션 배경(career 히어로, crewfit 히어로×2), 액센트 도배(career CTA 풀블리드 코발트), 2차 브랜드색(crewfit 클럽 팀컬러 red/blue/green/purple/orange). 캐논은 "배경은 플랫 단색, 그라데이션 금지 / 코발트는 단일 액센트, 도배 금지".
4. **4px 그리드·타입 스케일 이탈** — 반절-픽셀 사이즈(13.5/12.5/11.5px), off-grid 패딩/반경(9/14/18/22px), off-axis 굵기(640/660/740/760, 800/900)가 여러 레포에 산재.
5. **데이터 타이포 = Pretendard 단일 + tabular-nums** — (후속 결정 반영) 별도 모노 폰트는 시스템 전체에서 제거. 숫자·데이터는 Pretendard + `font-variant-numeric: tabular-nums`로 정렬. crewfit이 먼저 택했던 방식이 전체 표준이 됨.

---

## 3. 레포별 상세

### 3.1 career — 포트폴리오 (3 유닛)

**shared-css (🟠 mixed)** — 3개 스타일시트가 `cobalt-doc.css → studio.css → landing.css` 순으로 쌓이며 **`landing.css`가 모든 공유 셀렉터를 덮어써** 실제 렌더 테마를 지배. `cobalt-doc.css`는 캐논 토큰을 거의 완벽 미러링(강점).

| 심각도 | 차원 | 위치 | 증거 / 수정 |
|---|---|---|---|
| **High** ✅확인 | tokens | `landing.css:7-22` | `:root` 평행 팔레트 — `--ink:#1B2430`(캐논 `#14171b`), `--line:#E4E8EF`(캐논 `#dde0e5`) 드리프트. → 캐논 시맨틱 토큰 참조로 교체 |
| **High** ✅확인 | color | `landing.css:57` | `.st-hero{background:linear-gradient(...)}` — 그라데이션 금지 위반. → 플랫 `--surface-page` |
| **High** ✅확인 | color | `landing.css:226-243` | `.cta-sec{background:var(--cobalt);padding:96px 0}` 풀블리드 코발트 도배. → ink/off-white 밴드 + 코발트는 버튼에만 |
| **High** ✅확인 | spacing/grid | `landing.css` 전반 | 카드 `border-radius:14px`(캐논 20px), off-grid 9/18/22/38px 산재. → 4px 그리드·radius 토큰 스냅 |
| Med→ | color | `landing.css:18-19` 외 | 코발트-틴트/순흑 그림자(`rgba(45,91,255,.12)`, `rgba(0,0,0,.22)`) → 캐논 쿨 그림자 토큰 (심각도 High→**Med** 정정) |
| Med | typography | `landing.css` | off-axis 굵기 640/660/740/760, 반절-픽셀 사이즈 13.5/12.5px → 400/500/600/700, px 스케일 |
| Med | responsive | `landing.css:255,266` | 브레이크포인트 900/520(캐논 480/768/1024/1280 아님), ≤640 타입 다운스케일 없음 |
| Low | voice | `index.html:83,120,156` | EN 제목 Title Case("Selected Work") → Sentence case |

**case-pages (🟢 strong)** — 13개 케이스 페이지 모두 viewport meta·무이모지·무그라데이션·토큰 구동. 유일한 하드룰 이슈:

| 심각도 | 차원 | 위치 | 증거 / 수정 |
|---|---|---|---|
| **High** ✅확인 | accessibility | 전 13개 `case-*.html` | 포커스 링이 `landing.css`에만 정의돼 있는데 케이스 페이지는 그 파일을 로드 안 함 → 캐논 2px 코발트 포커스 링 **전부 부재**(브라우저 기본만). → `studio.css`/`cobalt-doc.css`에 `:focus-visible` 규칙 추가 |
| Low(부분) | responsive | `studio.css:27,129` | `.cta`(~31.5px)·`.pj-back`(~13-18px) 터치 타깃 <44px (단 비-CTA 네비는 ≤720px에서 hidden이라 일부 무효 — 부분 확인) |

**doc-pages (🟠 mixed)** — 이력/경력/자소서 4종. 브랜드/보이스는 강함(무이모지, mono=데이터, 무그라데이션). 약점은 스케일/반응형:

| 심각도 | 차원 | 위치 | 증거 / 수정 |
|---|---|---|---|
| High→**Med**(부분) | responsive | `cobalt-doc.css:60-64` | `.page{max-width:840px;padding:56px 60px}` + screen용 @media 전무 → 360px서 거터 과대(리플로우는 됨, 오버플로우는 아님 — "오버플로우" 주장은 refute). → ≤480/768 거터 스텝다운 추가 |
| Med | typography | `cobalt-doc.css` | 본문 15px(캐논 16), 반절-픽셀 14.5/13.5/12.5px 다수 → px 스케일 스냅 |
| Med→Low(부분) | responsive | `cobalt-doc.css:69` | 디스플레이 타입 ≤640 다운스케일 없음(단 최대 타입이 30px라 실질 영향 작음) |

### 3.2 crewfit — 모바일 크루 웹앱 (🟠 mixed)

> 기반 토큰·모바일 반응형·접근성은 **우수**(viewport-fit=cover, bottom-nav safe-area, 44px 터치 백필, 16px 입력 iOS 줌방지, 2px 코발트 포커스 링). PC 데스크톱 레이아웃 이슈는 **본 세션에서 별도 수정**(아래 §5).

| 심각도 | 차원 | 위치 | 증거 / 수정 |
|---|---|---|---|
| **High** ✅확인 | color | `styles.css:268-272` | 클럽별 팀컬러 `--acc:#e5302a/#2b6fe0/#1f9d4d/...` — **2차 브랜드 휴 패밀리** 도입(캐논 단일 액센트 위반). → 제품 필수면 명시적 스코프 예외로 격리, 아니면 제거 |
| **High** ✅확인 | color | `styles.css:252,325` | `.hero`/`.sinfo-hero` `linear-gradient(...)` — 그라데이션 금지. → 플랫 표면 |
| Med | color | `styles.css:256` | `.hero::after` 장식용 SVG 블롭 오버레이 → 제거(표면 플랫 유지) |
| ✓ 무효 | typography | `styles.css:56` | `--font-mono:var(--font-text)` — (후속 결정으로 무효) 별도 모노 폰트는 시스템 전체에서 제거. 데이터는 Pretendard + `tabular-nums` 정렬이 표준. crewfit 방식이 곧 캐논. |
| Med | typography | `styles.css:102` | 본문 `0.875rem`(14px) — 캐논 16px. 가장 모바일-중요 표면 → 16px/1.6 |
| Low | accessibility | `styles.css:649` | `.pin-real{outline:none}` — **refuted**(거짓양성): 포커스는 `.pin-cell.active` 링으로 가시화됨 |
| Low | responsive | `styles.css:598` | `.custom-row input{width:112px}` — **refuted**: 형제 flex:1라 360px 오버플로 안 됨 |

### 3.3 dilettantisme — AI 스튜디오 MVP (🟡 good ×2)

**fork-drift** — `cobalt/`는 캐논의 **포크**. 복사된 파일(colors/fonts/spacing/typography/components)은 **전부 byte-identical**(드리프트 0, 강점). 단 하나의 큰 누락:

| 심각도 | 차원 | 위치 | 증거 / 수정 |
|---|---|---|---|
| **High** ✅확인 | responsive | `cobalt/tokens/`, `cobalt/` | **반응형 표준 전체 부재** — `breakpoints.css`·`responsive.css` 없음. `cobalt.css`가 둘을 import 안 해 소비자는 반응형 0(브레이크포인트·콘텐츠캡·거터·≤640 다운스케일·`.ds-container`·safe-area 전무). → 두 파일 vendor 후 `cobalt.css`에 import(responsive.css 마지막) |

**app** — 색/보이스/미학은 거의 완벽(모노+코발트 단일 액센트, 무그라데이션, 무이모지, 포커스 링 보존). 약점은 반응형:

| 심각도 | 차원 | 위치 | 증거 / 수정 |
|---|---|---|---|
| **High** ✅확인 | responsive | `cobalt.css`+`styles.css:196` | 반응형 레이어 미vendor + 자체 880px 단일 브레이크포인트(캐논 래더 아님) |
| Med | responsive | `index.html:5`+`styles.css:29,181` | `viewport-fit=cover` 선언했으나 sticky `.appbar`/`.toast-host`에 `env()` safe-area 패딩 없음 → `--safe-*`로 패딩 |
| Low | spacing | `styles.css:51,55` | `400px 1fr` 사이드바 + 1200px 캡(캐논 1120/1240 아님) |

### 3.4 grandfather — 또박또박 어르신 접근성 앱 (🟡 good)

> 의도적 **큰 타입(40→52px)·고대비·heavy weight는 정당한 a11y 이탈**로 인정(위반 아님). `remote.html`은 시맨틱 토큰을 충실히 미러링(최강). 실제 위반은 `privacy.html`에 집중:

| 심각도 | 차원 | 위치 | 증거 / 수정 |
|---|---|---|---|
| **High** ✅확인 | color | `privacy.html:6,9,14` | `--brand:#0b66ff` + theme-color + favicon — **코발트 `#2d5bff`가 아닌 잘못된 블루**. → 전부 `#2d5bff` |
| Med | tokens | `privacy.html:13-14` | 드리프트 그레이 램프 하드코딩(`#11151c` 등) → DS 그레이 토큰 |
| Med | typography | `index.html`·`privacy.html` | font-weight 800/900(캐논 400-700 축 밖) → 700 캡(큰글씨로 가독 확보, 굵기는 정당화 안 됨) |
| Med | spacing | `index.html`·`privacy.html` | off-grid 반경 18/24/14/10px, off-grid 패딩 다수 → 4px 스냅(코너 반경은 a11y 정당성 없음) |
| Low | voice | `remote.html:233-257` | JS 데이터에 죽은 이모지 리터럴(🔇🔊📺 등, 렌더 안 됨) → 제거 |
| Low | color | `index.html:179-236` | 단일 모달 내 코발트 컨트롤 다중(액센트 약간 확산) → 보조 버튼은 ink/ghost로 |

### 3.5 design-system — 캐논 자체 정합성 (🟢 strong) — **본 세션 수정 완료**

캐논은 매우 자기일관적(토큰 단일 출처, EN/KO README 일치, 컴포넌트 카운트 일치). 발견된 정합성 버그는 **이 세션에서 모두 수정**:

| 심각도 | 위치 | 문제 → 수정 |
|---|---|---|
| **High** ✅확인 | `foundations/radius-scale.html:19-21` | 라벨이 옛 값 sm 6/md 10/lg 14 표기(토큰은 8/12/16) → **8/12/16으로 수정** |
| Med | `README.md:3`·`README.ko.md:3` | 언어 스위처 헤더의 globe 이모지 🌐 — 자체 "no-emoji" 규칙 위반 → **제거** |
| Med→Low(부분) | `index.html:106` | "158 Design tokens"가 실제 카운트와 불일치 → **149(실제 토큰 이름 수)로 수정** |
| Low | `foundations/type-mono.html:20` | 코드 샘플 주석 "// 10px"(토큰 12px) → **12px로 수정** |
| Low | `foundations/spacing-scale.html:19` | 스페시먼이 28/80/96 누락("0→96" 부제와 불일치) → **추가** |
| Info | `tokens/colors.css:91` | `--chart-4:#8b5cf6` 보라 — 데이터-viz 팔레트의 **문서화된 의도적 예외**(수정 불요) |

---

## 4. 우선순위 액션 (권고)

**P0 — 하드룰/브랜드 정체성 위반**
- career `landing.css`: 히어로 그라데이션 제거, CTA 코발트 도배 제거, `:root` 평행 팔레트 → 토큰 참조
- crewfit: 히어로 그라데이션×2 제거; 클럽 팀컬러는 "스코프 예외"로 명시 또는 단일 액센트로 통일
- grandfather `privacy.html`: `#0b66ff` → 코발트 `#2d5bff`
- career case-pages: `:focus-visible` 코발트 링을 `studio.css`에 추가(13페이지 접근성)

**P1 — 반응형 표준 정렬**
- dilettantisme: `breakpoints.css`+`responsive.css`를 `cobalt/`에 vendor하고 `cobalt.css`에 import
- 전 레포: 단일 브레이크포인트 → 캐논 래더(480/768/1024/1280), `.ds-container`/`--gutter` 채택, ≤640 타입 다운스케일
- dilettantisme app: `viewport-fit=cover` safe-area 패딩 추가

**P2 — 그리드/타입 위생**
- off-grid 사이즈/반경/굵기 → 4px 그리드·px 스케일·400-700 축 스냅
- crewfit: 본문 14→16px (데이터 타이포는 Pretendard + tabular-nums 유지 — 별도 모노 폰트 미사용이 표준)
- career doc-pages: 모바일 거터 스텝다운 추가, 본문 15→16px

---

## 5. 본 세션에서 이미 수행한 작업

1. **design-system 반응형 표준 신규 확립** — `tokens/breakpoints.css`(5단 래더·콘텐츠캡·거터·터치·safe-area), `css/responsive.css`(≤640 타입 다운스케일·`.ds-container`·`.ds-safe-*`·`.ds-touch`·고정바 safe-area), `foundations/responsive.html` 스페시먼, README(EN/KO)·SKILL 문서화. → PR [design-system#6](https://github.com/Greencar-UXD/design-system/pull/6)
2. **design-system 자체 정합성 6건 수정**(§3.5) — radius 스페시먼/주석, globe 이모지, 토큰 카운트, spacing 스페시먼, EN README radius-md 오기.
3. **crewfit PC 데스크톱 레이아웃 수정**(§아래) — PR [crewfit#22](https://github.com/Greencar-UXD/crewfit/pull/22).

### crewfit 데스크톱 "간격 벙벙" 수정 (검증 완료)
- **원인:** `#app` 데스크톱 그리드가 `min-height:100vh`인데 `align-content` 미지정 → header 행 stretch로 콘텐츠가 ~130px 아래로 밀림(상단 빈공간). 카드 그리드가 `auto-fill`+`1fr` → 카드 과대 확장 + 적은 콘텐츠서 유령 트랙.
- **수정:** `#app`에 `align-content:start`; 카드 그리드 `auto-fill 1fr` → `auto-fit`+자연 폭 cap(~360/380px). 전부 `@media min-width:880px` 내부.
- **검증(headless Chromium 1440/390):** 첫 콘텐츠 top **214px→84px**, 카드 폭 368→360px, **모바일 byte-identical(무회귀)**.

---

*감사 도구: 8 유닛 병렬 + 고심각/의심 33건 적대적 재검증. 재검증으로 3건 거짓양성 제거, 다수 심각도 정정.*
