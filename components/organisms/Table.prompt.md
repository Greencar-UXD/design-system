Table — data table with column config and per-cell renderers.

```jsx
import { Table } from './components/data/Table';
import { Badge } from './components/display/Badge';

<Table rowKey="id"
  columns={[
    { key: 'name', label: '이름' },
    { key: 'role', label: '역할' },
    { key: 'status', label: '상태', align: 'center',
      render: (v) => <Badge variant={v==='활성'?'success':'neutral'} dot>{v}</Badge> },
    { key: 'amount', label: '금액', align: 'right' },
  ]}
  rows={[
    { id:1, name:'박지우', role:'디자이너', status:'활성', amount:'₩1,200,000' },
    { id:2, name:'김코발', role:'개발자', status:'대기', amount:'₩980,000' },
  ]} />
```

- **columns**: `{key,label,align?,width?,render?}`. Use `render` for badges, links, formatted numbers. Right-align numeric columns.
