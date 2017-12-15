import {combineReducers} from 'redux';
import merge from 'lodash/merge';


import settings from './settingsReducer'
import tables from './tableReducer'

const appReducer = combineReducers ({
  settings,
  tables
})

const rootReducer = (state, action) => {
  Object.freeze(state);
  if (action.type === 'UPLOAD_PROJECT') {
    return action.project
  }

  return appReducer(state, action);
}



export default rootReducer;
