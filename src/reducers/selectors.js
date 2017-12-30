import values from 'lodash/values';

export const selectTableData = ( state, table ) => {
  if ( state.tables[ table ] ) {
    // debugger
    return Object.values(state.tables[ table ]);
    } else {
      return [];
    }
  }
