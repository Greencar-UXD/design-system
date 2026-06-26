DonutChart — proportion of a whole, with a legend that pairs each color with a label + value.

```jsx
import { DonutChart } from './components/molecules/DonutChart.jsx';

<DonutChart
  center="100"
  data={[
    { label: 'Direct', value: 45 },
    { label: 'Search', value: 30 },
    { label: 'Social', value: 25 },
  ]}
/>
```

- Segment colors default to the `--chart-1…6` palette (chart-1 follows the brand); override per datum with `color`.
- The legend shows label + value + %, so the chart is readable without color. `role="img"` carries a text summary.
