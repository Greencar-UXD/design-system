Tooltip — small label shown on hover/focus, on the inverse (dark) surface.

```jsx
import { Tooltip } from './components/overlay/Tooltip';
import { IconButton } from './components/forms/IconButton';

<Tooltip content="설정" side="top">
  <IconButton icon={<LucideSettings/>} label="설정" />
</Tooltip>
```

- **side**: `top` (default) · `bottom` · `left` · `right`. Wrap a focusable trigger so it also appears on keyboard focus.
