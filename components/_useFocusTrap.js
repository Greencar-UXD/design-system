import React from 'react';

/**
 * Modal accessibility helper.
 * When `open` becomes true: moves focus into the panel, traps Tab within it,
 * and restores focus to the previously focused element when it closes.
 *
 * Pair with a panel element that has `tabIndex={-1}` and `ref={panelRef}`.
 * Esc-to-close stays in the component; this only manages focus.
 */
export function useFocusTrap(open, panelRef) {
  React.useEffect(() => {
    if (!open) return undefined;
    const panel = panelRef.current;
    if (!panel) return undefined;

    const previouslyFocused = document.activeElement;
    const SELECTOR =
      'a[href],button:not([disabled]),textarea:not([disabled]),' +
      'input:not([disabled]),select:not([disabled]),[tabindex]:not([tabindex="-1"])';
    const focusable = () =>
      Array.from(panel.querySelectorAll(SELECTOR)).filter((el) => el.offsetParent !== null);

    // Move focus into the dialog (first focusable, else the panel itself).
    (focusable()[0] || panel).focus();

    const onKeydown = (e) => {
      if (e.key !== 'Tab') return;
      const items = focusable();
      if (items.length === 0) {
        e.preventDefault();
        panel.focus();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    panel.addEventListener('keydown', onKeydown);
    return () => {
      panel.removeEventListener('keydown', onKeydown);
      if (previouslyFocused && typeof previouslyFocused.focus === 'function') {
        previouslyFocused.focus();
      }
    };
  }, [open, panelRef]);
}
