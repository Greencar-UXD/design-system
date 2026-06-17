Dialog — controlled modal. Manage `open` yourself; closes on backdrop click, Esc, and the × button.

```jsx
import { Dialog } from './components/overlay/Dialog';
import { Button } from './components/forms/Button';

const [open, setOpen] = React.useState(false);
<Button onClick={() => setOpen(true)}>열기</Button>
<Dialog open={open} onClose={() => setOpen(false)} title="삭제할까요?"
  footer={<>
    <Button variant="ghost" onClick={() => setOpen(false)}>취소</Button>
    <Button variant="danger" onClick={() => setOpen(false)}>삭제</Button>
  </>}>
  이 작업은 되돌릴 수 없습니다.
</Dialog>
```

- **size**: `sm` · `md` · `lg`. **footer**: action buttons, right-aligned.
