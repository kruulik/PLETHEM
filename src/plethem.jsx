import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'; // required for HMR
import merge from 'lodash/merge';

import configureStore from 'store/configureStore';
import { loadState, saveState } from 'store/localStorage';

import throttle from 'lodash/throttle';

import Root from 'containers/Root/Root';

document.addEventListener('DOMContentLoaded', () => {

  const storedState = loadState();
  // let preloadedState;
  //
  // if (window.currentUser) {
  //   preloadedState = {
  //     session: {
  //       currentUser: window.currentUser
  //     }
  //   };
  //   delete window.currentUser;
  // } else {
  //   preloadedState = {
  //     session: {
  //       currentUser: null
  //     }
  //   }
  // }

  // const initialState = merge({}, preloadedState, storedState);
  const store = configureStore(storedState);

  window.store = store;
  window.getState = store.getState;

  store.subscribe(throttle(() => {
    saveState(store.getState());
  }, 1000));

  const renderApp = Component => {
    ReactDOM.render(
      <AppContainer>
        <Component store={store}/>
      </AppContainer>,
      document.getElementById('root'),
    )
  };

  renderApp(Root)

  // Webpack Hot Module Replacement API
  if (module.hot) {
    module.hot.accept('./containers/Root/Root', () => { render(Root) })
  }

});
