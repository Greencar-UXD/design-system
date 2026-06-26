Command — ⌘K command palette (modal). Controlled via `open` / `onClose`. Wire the keyboard shortcut yourself.

```jsx
import { Command } from './components/organisms/Command.jsx';

const [open, setOpen] = useState(false);

useEffect(() => {
  const onKey = (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') { e.preventDefault(); setOpen(true); }
  };
  window.addEventListener('keydown', onKey);
  return () => window.removeEventListener('keydown', onKey);
}, []);

<Command open={open} onClose={() => setOpen(false)} items={[
  { label: '새 파일', hint: '⌘N', icon: <LucidePlus/>, onSelect: newFile },
  { label: '설정 열기', icon: <LucideSettings/>, onSelect: openSettings },
  { label: '테마 전환', onSelect: toggleTheme },
]} />
```

- **Keyboard**: type to filter, ↓/↑/Home/End to move, Enter to run, Esc / backdrop to close.
- **a11y**: `role=dialog aria-modal`, focus trapped in the panel and restored to the trigger on close; list is `role=listbox` with `aria-activedescendant`.
- **items**: `{ label, hint?, icon?, group?, onSelect }`. Items sharing a `group` render under a heading; arrow keys flow across groups.
- **Async**: pass `loading` to show a busy row while you fetch `items`.
