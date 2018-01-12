import { uid } from 'util/uid';

import {
  RECEIVE_TABLE,
  RECEIVE_ROW,
  RECEIVE_COMPOUNDS,
  RECEIVE_PHYS
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

  let prev, next, table, column, rows, id;

  switch(action.type) {
    case 'RECEIVE_TABLE':
      return merge({}, state, {
        [action.tableName]: {}
      });
    case 'RECEIVE_ROW':
      prev = state[action.table];
      id = uid();
// NOTE: Not sure if this is the right way to go about adding 'details' obj to each item
  debugger
      // let details =
      next = {[id]: merge({key: id}, action.defaults, {
        details: {

        }
      })};
      rows = merge({}, prev, next);
      return merge({}, state, {[action.table]: rows});
    case'REMOVE_ROWS':
      rows = action.rowIDs;
      next = merge({}, state);
      rows.forEach(row => {
        delete next[action.table][row];
      });
      return next;
    case 'UPDATE_CELL':
      prev = state[action.table];
      next = Object.assign({}, prev[action.row], {
        [action.column]: action.value
      });
      debugger
      return merge({}, state, { [action.table]: {
        [action.row]: next
      }});
    case 'RECEIVE_COMPOUNDS':
      let compounds = JSON.parse(action.compounds);
      compounds.map((comp, i) => {
        merge(comp, {key: `CAS=${comp.CAS}__UID=${uid()}`})
      });
      return merge({}, state, {compounds: compounds});
    case 'RECEIVE_PHYS':
      prev = state[action.table][action.key];
      return merge({}, state, {[action.table]: {
        [action.key]: {details: action.details}
      }});
    default:
      return state;
  }
}

export default tables;
