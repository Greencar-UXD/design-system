Toast — floating notification card. Presentational: render it in a fixed-position container and remove it on a timer.

```jsx
import { Toast } from './components/feedback/Toast';

<div style={{position:'fixed', bottom:24, right:24, display:'flex', flexDirection:'column', gap:10}}>
  <Toast variant="success" title="업로드 완료" onClose={dismiss}>파일이 저장되었습니다.</Toast>
</div>
```

- Shares variants/icons with `Alert`. Use Toast for transient feedback, Alert for in-page persistent messages.
