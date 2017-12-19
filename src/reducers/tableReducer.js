import {
  RECEIVE_TABLE,
  RECEIVE_ROW
} from 'actions/tableActions';

import merge from 'lodash/merge';

const tables = (state = {}, action) => {
  Object.freeze( state );

  switch(action.type) {
    case 'RECEIVE_TABLE':
      return merge({}, state, {
        [action.tableName]: []
      });
    case 'RECEIVE_ROW':
    // debugger
      // const rows = state[action.table];
      // const newRows = rows.concat( action.rowID: {id: action.rowID} )
      const prev = state[action.table]
      const newRow = {key: action.rowID}
      const rows = [
        ...prev,
        newRow
      ]

      debugger
      return merge({}, state, {[action.table]: rows})
    default:
      return state;
  }
}

export default tables;
