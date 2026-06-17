Avatar — user image with automatic initials fallback and optional status dot.

```jsx
import { Avatar } from './components/display/Avatar';

<Avatar src="/me.jpg" name="홍길동" />
<Avatar name="김디자인" size="lg" status />
<Avatar name="AB" size="sm" square />
```

- **size**: `xs` (24) · `sm` (32) · `md` (40) · `lg` (56)
- **square**: rounded-square mask. **status**: online dot.
