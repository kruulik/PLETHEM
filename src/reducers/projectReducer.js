import { UPLOAD_PROJECT } from '../actions/projectActions';
import merge from 'lodash/merge';


const initialState = {};

const project = (state = initialState, action) => {
  Object.freeze(state);

  switch (action.type) {
    case UPLOAD_PROJECT:
    merge( {}, state.project, action.project)
    default:
      return state;
  }
};

export default project;
