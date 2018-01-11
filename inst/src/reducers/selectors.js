import values from 'lodash/values';

export const selectTableData = ( state, table ) => {
  if ( state.tables[ table ] ) {
    return Object.values(state.tables[ table ]);
  } else {
    return [];
  }
}

export const selectSupplementalData = ( state, table ) => {
  const selectedItem = state.ui.selectedTableRow[table];
  if ( typeof selectedItem !== 'undefined' && typeof state.tables[table][selectedItem] !== 'undefined' ) {
    let data = state.tables[table][selectedItem];
    const rows = Object.keys(data).reduce((arr, datum, i) => {
      return arr = (datum === 'key') || (datum === 'organismName') ? arr : [...arr, {
        [datum]: data[datum],
        key: `${data['key']}_${i}`
      }]
    }, []);
    debugger
    return rows
  }
}
