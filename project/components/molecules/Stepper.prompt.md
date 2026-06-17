Stepper — shows progress through an ordered multi-step flow (checkout, onboarding).

```jsx
import { Stepper } from './components/navigation/Stepper';

<Stepper current={1} steps={['배송지', '결제', '확인']} />
```

Steps before `current` show a check; `current` is cobalt; later steps are muted.
