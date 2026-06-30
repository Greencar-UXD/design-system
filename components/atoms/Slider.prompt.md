Slider — range input with a accent fill.

```jsx
import { Slider } from './components/forms/Slider';

const [v, setV] = React.useState(40);
<Slider label="투명도" value={v} onChange={setV} showValue />
<Slider defaultValue={50} min={0} max={200} step={10} />
```

Controlled via `value`+`onChange`, or uncontrolled via `defaultValue`. `showValue` prints the number.
