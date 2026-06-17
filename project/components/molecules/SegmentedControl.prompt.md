SegmentedControl — compact single-select toggle; best for 2–4 short, mutually exclusive options.

```jsx
import { SegmentedControl } from './components/forms/SegmentedControl';

const [view, setView] = React.useState('list');
<SegmentedControl value={view} onChange={setView}
  options={[{value:'list',label:'목록'},{value:'grid',label:'그리드'}]} />
```

For many/long options use `Tabs` or `Select` instead.
