Drawer — side sheet for filters, details, or secondary flows without leaving the page.

```jsx
import { Drawer } from './components/overlay/Drawer';
import { Button } from './components/forms/Button';

const [open, setOpen] = React.useState(false);
<Button onClick={() => setOpen(true)}>필터 열기</Button>
<Drawer open={open} onClose={() => setOpen(false)} side="right" title="필터"
  footer={<Button variant="accent" onClick={() => setOpen(false)}>적용</Button>}>
  …filter controls…
</Drawer>
```

- **side**: `right` (default) · `left`. On mobile prefer `BottomSheet`.
