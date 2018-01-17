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
    let data = state.tables[table][selectedItem].details;
    const rows = Object.values(data)
    return rows
  }
}
