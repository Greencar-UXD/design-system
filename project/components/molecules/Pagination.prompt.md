Pagination — controlled page navigation; collapses long ranges with an ellipsis.

```jsx
import { Pagination } from './components/navigation/Pagination';

const [page, setPage] = React.useState(1);
<Pagination page={page} total={12} onChange={setPage} />
```

Active page uses the ink fill; prev/next disable at the ends.
