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
- **Multiple** — `value` is a string[], selections render as removable chips, the list stays open, Backspace removes the last chip:
  ```jsx
  <Combobox multiple value={tags} onChange={setTags} options={tagOptions} />
  ```
- **Async** — fetch options yourself and pass `loading` while in-flight:
  ```jsx
  <Combobox options={results} loading={isFetching} onChange={…} />
  ```
