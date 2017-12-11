import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import throttle from 'lodash/throttle';

import { loadState, saveState } from './localStorage'

import rootReducer from 'reducers/rootReducer';

const persistedState = loadState();

const configureStore = () => {

  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunk, logger)
  );

  // store state to local storage but throttle save rate
  store.subscribe(throttle(() => {
    saveState(store.getState());
  }, 1000));

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers/rootReducer', () => {
      const nextRootReducer = require('../reducers/rootReducer').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};

export default configureStore;
