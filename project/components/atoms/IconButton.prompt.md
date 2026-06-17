IconButton — square icon-only control for toolbars, cards, and dense UI. Always pass `label`.

```jsx
import { IconButton } from './components/forms/IconButton';

<IconButton icon={<LucideSettings/>} label="설정" />
<IconButton icon={<LucideHeart/>} label="좋아요" variant="outline" />
<IconButton icon={<LucideArrowRight/>} label="다음" variant="solid" size="lg" />
```

- **variant**: `ghost` (default) · `outline` · `solid` (ink)
- **size**: `sm` (30) · `md` (38) · `lg` (44 — mobile hit target)
