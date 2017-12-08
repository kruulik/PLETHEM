import {combineReducers} from 'redux';

import { errorMessage, router } from './commonReducers';

const rootReducer = combineReducers({
  errorMessage,
  router
});

export default rootReducer;
