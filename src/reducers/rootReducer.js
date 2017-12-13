import {combineReducers} from 'redux';
// import { UPLOAD_PROJECT } from '../actions/projectActions';
import merge from 'lodash/merge';


import settings from './settingsReducer'

const appReducer = combineReducers ({
  settings
})

const rootReducer = (state, action) => {
  Object.freeze(state);
  if (action.type === 'UPLOAD_PROJECT') {
    return action.project
    // merge( {}, state, action.project)
  }

  return appReducer(state, action);
}



export default rootReducer;
