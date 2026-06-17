Menu — dropdown for actions/options. Pass any `trigger`; items toggle a floating list.

```jsx
import { Menu } from './components/navigation/Menu';
import { IconButton } from './components/forms/IconButton';

<Menu align="right" trigger={<IconButton icon={<LucideMoreVertical/>} label="더보기" />}
  items={[
    { label: '편집', icon: <LucideEdit/>, onClick: edit },
    { label: '복제', icon: <LucideCopy/>, onClick: dup },
    { separator: true },
    { label: '삭제', icon: <LucideTrash/>, danger: true, onClick: del },
  ]} />
```

- **align**: `left` (default) · `right`. **items**: `{label, icon?, onClick?, danger?}` or `{separator:true}`.
