Accordion — collapsible sections for FAQs and dense settings.

```jsx
import { Accordion } from './components/display/Accordion';

<Accordion defaultOpen={[0]} items={[
  { title: '배송은 얼마나 걸리나요?', content: '영업일 기준 2–3일 소요됩니다.' },
  { title: '환불 정책', content: '수령 후 7일 이내 무료 반품이 가능합니다.' },
]} />
```

- **multiple**: allow several panels open. **defaultOpen**: indices open on mount.
