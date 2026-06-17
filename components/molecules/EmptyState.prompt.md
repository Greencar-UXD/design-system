EmptyState — friendly placeholder when there's no data yet.

```jsx
import { EmptyState } from './components/display/EmptyState';
import { Button } from './components/forms/Button';

<EmptyState icon={<LucideInbox/>} title="아직 작업이 없어요"
  description="첫 프로젝트를 추가하면 여기에 표시됩니다."
  action={<Button variant="accent">프로젝트 추가</Button>} />
```
