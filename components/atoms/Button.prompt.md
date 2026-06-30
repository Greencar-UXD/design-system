Button — the primary action control; ink-forward by default with a an `accent` variant for key CTAs.

```jsx
import { Button } from './components/forms/Button';

<Button>저장</Button>
<Button variant="accent">시작하기</Button>
<Button variant="secondary" icon={<LucidePlus/>}>추가</Button>
<Button variant="ghost" size="sm">취소</Button>
<Button variant="danger">삭제</Button>
```

- **variant**: `primary` (ink, default) · `accent` · `secondary` (outline) · `ghost` · `danger`
- **size**: `sm` · `md` · `lg`
- **icon / iconRight**: pass an SVG/icon node; sized automatically to the button.
- **fullWidth**: stretch to container.
- Use `primary` for the main action, `accent` sparingly for the single most important CTA on a view.
