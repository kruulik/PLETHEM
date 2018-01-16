import { uid } from 'util/uid';

import {
  RECEIVE_RESULTS
} from 'actions/tableActions';

import merge from 'lodash/merge';

const initialState = {

}

const results = (state = initialState, action) => {
  Object.freeze( state );

  let prev, next, table, column, rows, id;

  switch(action.type) {
    case 'RECEIVE_RESULTS':
    id = uid();
    return merge({}, state, { sampleData: action.transposed })
    default:
      return state;
  }
}

export default results;
