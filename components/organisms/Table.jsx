import React from 'react';

/** Table — styled data table. Define columns; pass row objects. */
export function Table({ columns = [], rows = [], rowKey, className = '' }) {
  const alignCls = (a) => a === 'right' ? 'is-right' : a === 'center' ? 'is-center' : '';
  return (
    <div className={['ds-table-wrap', className].filter(Boolean).join(' ')}>
      <table className="ds-table">
        <thead>
          <tr>
            {columns.map((c) => (
              <th key={c.key} className={alignCls(c.align)} style={c.width ? { width: c.width } : undefined}>{c.label}</th>
            ))}
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
