import { UPLOAD_PROJECT } from '../actions/fileActions';
import merge from 'lodash/merge';

const initialState = {};

const test = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case UPLOAD_PROJECT:
      debugger
      return merge({}, state, action.items);;
    default:
      return state;
  }
};

export default test;
