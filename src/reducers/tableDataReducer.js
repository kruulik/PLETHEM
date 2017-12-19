import {
  UPDATE_CELL
} from 'actions/tableActions';

import merge from 'lodash/merge';

const tableData = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case 'UPDATE_CELL':
      return merge({}, state, { [action.dataIndex]: action.value })
    // case 'CREATE_ROW':
    //   return merge({}, state, { [action.dataID]: [action.data] })
    default:
      return state;
  }
}

export default tableData;
