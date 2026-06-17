Tabs — controlled underline tab bar; the active tab gets a cobalt underline.

```jsx
import { Tabs } from './components/navigation/Tabs';

const [tab, setTab] = React.useState('work');
<Tabs value={tab} onChange={setTab}
  tabs={[{value:'work',label:'작업'},{value:'about',label:'소개'},{value:'contact',label:'연락처'}]} />
```

Controlled: you own `value` and update it in `onChange`.
