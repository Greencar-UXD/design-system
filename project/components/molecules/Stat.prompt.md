Stat — a single KPI: label, large tabular value, and an optional colored trend delta.

```jsx
import { Stat } from './components/display/Stat';

<Stat label="월간 매출" value="₩23.8M" delta="+12%" trend="up" />
<Stat label="이탈률" value="3.4%" delta="−0.8%" trend="down" />
```

Pair inside a `Card` for a metric tile. Values use tabular numerals.
