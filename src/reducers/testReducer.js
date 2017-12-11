import { TEST_ACTION } from '../actions/testActions';
import merge from 'lodash/merge';

const initialState = {};

const test = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case TEST_ACTION:
    debugger
      return merge({}, state, action.items);;
    default:
      return state;
  }
};

export default test;
