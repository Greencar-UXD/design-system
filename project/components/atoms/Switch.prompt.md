Switch — on/off toggle; active track fills with cobalt accent. Use for instant-apply settings.

```jsx
import { Switch } from './components/forms/Switch';

<Switch label="알림 받기" defaultChecked />
<Switch label="다크 모드" onChange={e => setDark(e.target.checked)} />
```
