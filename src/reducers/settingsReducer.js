import { CHANGE_DATASET } from '../actions/settingsActions';
import merge from 'lodash/merge';

const initialState = {};

const settings = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case CHANGE_DATASET:
      debugger
      return merge({}, state, {dataset: action.dataset});;
    default:
      return state;
  }
};

export default settings;
