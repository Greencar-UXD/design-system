ListRow — mobile list item with leading/trailing slots; used in settings, inboxes, feeds.

```jsx
import { ListRow } from './components/mobile/ListRow';
import { Avatar } from './components/display/Avatar';
import { Switch } from './components/forms/Switch';

<ListRow leading={<Avatar name="박지우" size="sm" />} title="박지우" subtitle="방금 전" trailing={<LucideChevronRight/>} onClick={open} />
<ListRow title="알림" trailing={<Switch defaultChecked />} />
```
