AppBar — mobile top bar with leading/trailing icon-button slots.

```jsx
import { AppBar } from './components/mobile/AppBar';
import { IconButton } from './components/forms/IconButton';

<AppBar title="홈"
  left={<IconButton icon={<LucideMenu/>} label="메뉴" />}
  right={<IconButton icon={<LucideBell/>} label="알림" />} />
```

- **align**: `center` (iOS-style) or `left` (Material-style).
