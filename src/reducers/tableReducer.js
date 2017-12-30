import {
  RECEIVE_TABLE,
  RECEIVE_ROW
} from 'actions/tableActions';

import merge from 'lodash/merge';

const initialState = {
  organisms: [],
  exposure: [],
  compounds: [],
  reactins: [],
  observations: [],
  simulations: [],
  results: [],
  plots: []
}

const tables = (state = initialState, action) => {
  Object.freeze( state );

  let prev, next, table, column;

  switch(action.type) {
    case 'RECEIVE_TABLE':
      return merge({}, state, {
        [action.tableName]: []
      });
    case 'RECEIVE_ROW':
      prev = state[action.table];
      next = {key: action.rowID};
      const rows = [
        ...prev,
        next
      ]
      return merge({}, state, {[action.table]: rows});
    case 'UPDATE_CELL':

      prev = state[action.table][action.row] ? state[action.table][action.row] : {};
      next = merge({}, prev, {[action.column]: action.value});
      // const newRows = merge({}, state[action.table][action.row], next);
      //
      //
      // return merge({}, state, newRows)

      return {
        ...state,
        [action.table]: [[action.row]: [next]]
      }

    default:
      return state;
  }
}

export default tables;
