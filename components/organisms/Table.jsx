import React from 'react';

const SORT_ICON = {
  none: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m7 15 5 5 5-5"/><path d="m7 9 5-5 5 5"/></svg>,
  ascending: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"/></svg>,
  descending: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>,
};

/**
 * Table — styled data table. Define columns; pass row objects.
 * Sorting (optional): mark a column `sortable: true`, pass `sort={{ key, dir }}`
 * (dir: 'asc' | 'desc') and `onSort(key)`. Sorting is controlled — sort the
 * `rows` yourself; the component renders the header control and aria-sort state.
 */
export function Table({ columns = [], rows = [], rowKey, sort, onSort, className = '' }) {
  const alignCls = (a) => (a === 'right' ? 'is-right' : a === 'center' ? 'is-center' : '');
  const sortState = (key) => (sort && sort.key === key ? (sort.dir === 'desc' ? 'descending' : 'ascending') : 'none');
  return (
    <div className={['ds-table-wrap', className].filter(Boolean).join(' ')}>
      <table className="ds-table">
        <thead>
          <tr>
            {columns.map((c) => {
              const sortable = !!(c.sortable && onSort);
              const state = sortable ? sortState(c.key) : undefined;
              return (
                <th key={c.key} className={alignCls(c.align)} style={c.width ? { width: c.width } : undefined} aria-sort={state}>
                  {sortable ? (
                    <button type="button" className="ds-table__sort" onClick={() => onSort(c.key)}>
                      {c.label}
                      <span className="ds-table__sorticon" aria-hidden="true">{SORT_ICON[state]}</span>
                    </button>
                  ) : c.label}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, ri) => (
            <tr key={rowKey ? r[rowKey] : ri}>
              {columns.map((c) => (
                <td key={c.key} className={alignCls(c.align)}>{c.render ? c.render(r[c.key], r) : r[c.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
