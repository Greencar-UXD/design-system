Sparkline — tiny inline trend line (no axes). Follows the brand accent; the last point is the signature dot.

```jsx
import { Sparkline } from './components/atoms/Sparkline.jsx';

<Sparkline data={[4, 7, 5, 9, 8, 12, 11, 15]} />
<Sparkline data={series} width={200} height={48} area={false} />
```

- Great inside a `<Stat>` or table cell. `role="img"` with an auto trend summary (override via `label`).
