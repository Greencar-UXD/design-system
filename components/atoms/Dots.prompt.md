Dots — signature inline loader: three marks with the accent point landing last. Follows the active brand accent; respects reduced motion.

```jsx
import { Dots } from './components/atoms/Dots.jsx';

<Dots />
<Dots label="저장 중" />
```

- Quiet inline alternative to `<Spinner>` (e.g. inside a button or beside a label).
- Always carries an aria label (`role="status"`).
