import {
  RECEIVE_TABLE,
  RECEIVE_ROW
} from 'actions/tableActions';

import merge from 'lodash/merge';

const initialState = {
  organisms: {},
  exposure: {},
  compounds: {},
  reactins: {},
  observations: {},
  simulations: {},
  results: {},
  plots: {}
}

const tables = (state = initialState, action) => {
  Object.freeze( state );

  let prev, next, table, column, rows;

  switch(action.type) {
    case 'RECEIVE_TABLE':
      return merge({}, state, {
        [action.tableName]: {}
      });
    case 'RECEIVE_ROW':
      prev = state[action.table];
      next = {[action.rowID]: {key: action.rowID}};
      rows = merge({}, prev, next);
      return merge({}, state, {[action.table]: rows});
    case'REMOVE_ROWS':
      rows = action.rowIDs;
      next = merge({}, state[action.table]);
      debugger
      rows.forEach(row => {
        delete next[row];
      });

    debugger
      return merge({}, state[action.table], {[action.table]: next});
    case 'UPDATE_CELL':
      prev = state[action.table];
      next = Object.assign({}, prev[action.row], {[action.column]: action.value});
      return merge({}, state, { [action.table]: {
        [action.row]: next
      }})

    default:
      return state;
  }
}

export default tables;
