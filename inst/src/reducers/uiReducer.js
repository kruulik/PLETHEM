import {
  SELECT_ROW
} from 'actions/tableActions';

import merge from 'lodash/merge';

const initialState = {}

const ui = (state = initialState, action) => {
  Object.freeze( state );

  let prev, next;

  switch(action.type) {
    case 'SELECT_ROW':
    debugger
      return merge({}, state, { selectedTableRow: {
        [action.table]: action.rowID
      }});
    default:
      return state;
  }
}

export default ui;
