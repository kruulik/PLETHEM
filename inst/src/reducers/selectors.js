import values from 'lodash/values';

export const selectTableData = ( state, table ) => {
  if ( state.tables[ table ] ) {
    return Object.values(state.tables[ table ]);
  } else {
    return [];
  }
}

export const selectSupplementalData = ( state, table ) => {
  debugger
  const selectedItem = state.ui.selectedTableRow[table];

}
