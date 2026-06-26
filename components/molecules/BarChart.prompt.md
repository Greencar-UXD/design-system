BarChart — vertical bars with values labeled directly. Neutral bars; highlight one in the accent.

```jsx
import { BarChart } from './components/molecules/BarChart.jsx';

<BarChart
  highlightIndex={3}
  valueFormat={(v) => `${v}%`}
  data={[
    { label: 'Mon', value: 30 }, { label: 'Tue', value: 52 },
    { label: 'Wed', value: 41 }, { label: 'Thu', value: 64 }, { label: 'Fri', value: 48 },
  ]}
/>
```

- Values are always shown, so the chart reads without color. `role="img"` carries a full text summary.
- Use `highlightIndex` to draw attention to one bar (the brand accent); the rest stay monochrome.
