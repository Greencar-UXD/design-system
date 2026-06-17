Card — the base surface container: white card, hairline border, large radius, soft shadow. Auto-adapts to dark theme.

```jsx
import { Card } from './components/display/Card';

<Card>기본 카드 내용</Card>
<Card interactive onClick={open}>클릭 가능한 카드 (hover 시 살짝 떠오름)</Card>
<Card flat padded={false}>그림자 없는 플랫 카드</Card>
```

- **interactive**: adds hover lift + pointer.
- **flat**: removes shadow (for nested/embedded cards).
- **padded**: toggle the default inner padding (`--space-6`).
- **as**: render as a different tag (e.g. `as="a"`, `as="article"`).
