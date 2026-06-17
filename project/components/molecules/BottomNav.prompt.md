BottomNav — mobile bottom tab bar (icon + label). Active item turns cobalt.

```jsx
import { BottomNav } from './components/mobile/BottomNav';

const [tab, setTab] = React.useState('home');
<BottomNav value={tab} onChange={setTab} items={[
  { value:'home', label:'홈', icon:<LucideHome/> },
  { value:'search', label:'검색', icon:<LucideSearch/> },
  { value:'me', label:'내정보', icon:<LucideUser/> },
]} />
```
