BottomSheet — mobile-friendly bottom modal for actions, pickers, and short forms.

```jsx
import { BottomSheet } from './components/mobile/BottomSheet';
import { ListRow } from './components/mobile/ListRow';

const [open, setOpen] = React.useState(false);
<BottomSheet open={open} onClose={() => setOpen(false)} title="옵션">
  <ListRow title="공유" onClick={share} />
  <ListRow title="삭제" onClick={del} />
</BottomSheet>
```

The desktop equivalent is `Drawer`.
