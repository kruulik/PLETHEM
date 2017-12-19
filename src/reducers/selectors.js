import values from 'lodash/values';

export const selectTableData = ( state, table ) => {
  debugger
  if ( state.tables[ table ] ) {
    return state.tables[ table ];
    } else {
      return [];
    }
  }
