import {
  UPDATE_CELL
} from 'actions/tableActions';

import merge from 'lodash/merge';

const initialState = {}

const tables = (state = initialState, action) => {
  Object.freeze( state );

  switch(action.type) {
    case 'UPDATE_CELL':
      return merge({}, state, { [action.dataIndex]: action.value })
    default:
      return state;
  }
}

export default tables;
