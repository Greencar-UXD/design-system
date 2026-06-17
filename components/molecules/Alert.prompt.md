Alert — inline status banner (info/success/warning/danger) with a built-in icon. Use for persistent, in-context messages.

```jsx
import { Alert } from './components/feedback/Alert';

<Alert variant="success" title="저장됨">변경 사항이 반영되었습니다.</Alert>
<Alert variant="warning">결제 정보를 확인해 주세요.</Alert>
<Alert variant="danger" title="오류" onClose={dismiss}>네트워크 연결을 확인하세요.</Alert>
```

- **variant** sets the color + default icon. **title** optional bold line. **onClose** adds a dismiss ×.
- For transient pop-up notifications use `Toast` instead.
