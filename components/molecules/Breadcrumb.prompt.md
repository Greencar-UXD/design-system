Breadcrumb — shows the current location in a hierarchy; the last item is the active page.

```jsx
import { Breadcrumb } from './components/navigation/Breadcrumb';

<Breadcrumb items={[
  { label: '홈', onClick: () => go('home') },
  { label: '작업', onClick: () => go('work') },
  { label: '가계부 앱 리디자인' },
]} />
```
