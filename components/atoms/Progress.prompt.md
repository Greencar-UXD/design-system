Progress — linear bar with a accent fill.

```jsx
import { Progress } from './components/feedback/Progress';

<Progress value={62} />
<Progress indeterminate />
```

`value` 0–100 for determinate; `indeterminate` for unknown-duration loading (auto-stills under reduced-motion).
