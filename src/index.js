import React from 'react';
import { render } from 'react-dom';
import GoogleAnalytics from 'react-ga';
import merge from 'lodash/merge';
import { getStoredState } from 'redux-persist/es/getStoredState';
import { createPersistoid } from 'redux-persist/es/createPersistoid';
import storage from 'redux-persist/es/storage';
import { loadState, saveState } from 'store/localStorage';

import Root from './containers/Root/Root';
import rootSaga from './modules/rootSaga';
import getRoutes from './routes';
import { history } from './services';
import configureStore from './store/configureStore';
import config from './config';

// GoogleAnalytics.initialize(config.app.googleAnalytics.appId);

async function renderClient() {

  const dest = document.getElementById('content');
  const persistedState = loadState();
  const store = configureStore(
    history,
    persistedState
  );
  store.runSaga(rootSaga);

  store.subscribe(() => {
    saveState(store.getState());
  })

  render(
    <Root store={store} history={history} routes={getRoutes(store)} />,
    dest
  );

  if (process.env.NODE_ENV !== 'production') {
    window.React = React; // enable debugger
  }
}

renderClient();
