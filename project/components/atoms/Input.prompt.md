Input — text field with optional label, leading icon, hint, and error state. Focus ring uses the cobalt accent.

```jsx
import { Input } from './components/forms/Input';

<Input label="이메일" placeholder="you@example.com" type="email" />
<Input label="검색" icon={<LucideSearch/>} placeholder="검색어 입력" />
<Input label="비밀번호" type="password" error="8자 이상 입력하세요" required />
```

- **label / hint / error**: error replaces hint and turns the border red.
- **icon**: leading icon, auto-padded.
- All native `<input>` props pass through (`type`, `value`, `onChange`, …).
