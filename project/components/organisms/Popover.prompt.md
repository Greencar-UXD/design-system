Popover — click-triggered floating panel for rich content (filters, mini-forms, details).

```jsx
import { Popover } from './components/overlay/Popover';
import { Button } from './components/forms/Button';

<Popover align="right" trigger={<Button variant="secondary">필터</Button>}>
  <div style={{display:'flex',flexDirection:'column',gap:10}}>…filter controls…</div>
</Popover>
```

For a simple action list, prefer `Menu`.
