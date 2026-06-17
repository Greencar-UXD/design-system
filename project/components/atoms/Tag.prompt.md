Tag — chip/label, optionally removable. Use for filters, selected keywords, and multi-select tokens.

```jsx
import { Tag } from './components/display/Tag';

<Tag>디자인</Tag>
<Tag onRemove={() => remove('react')}>React</Tag>
```

Provide `onRemove` to render the × button (keyboard accessible).
