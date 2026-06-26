Combobox — searchable single-select. Type to filter; the list is a WAI-ARIA listbox. Controlled via `value` / `onChange`.

```jsx
import { Combobox } from './components/molecules/Combobox.jsx';

const [city, setCity] = useState();

<Combobox
  label="도시"
  placeholder="도시 검색…"
  value={city}
  onChange={setCity}
  options={[
    { value: 'seoul', label: 'Seoul' },
    { value: 'busan', label: 'Busan' },
    { value: 'jeju',  label: 'Jeju' },
  ]}
/>
```

- **Keyboard**: ↓/↑ open + move, Home/End jump, Enter select, Esc close; typing filters. Outside-click dismisses.
- **a11y**: `role=combobox` + `aria-expanded` / `aria-controls` / `aria-activedescendant`; options are `role=option` with `aria-selected`.
- Sorting/grouping is the caller's job — pass already-ordered `options`.
