import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'; // required for HMR
import merge from 'lodash/merge';

import configureStore from 'store/configureStore';
import Root from 'views/Root';

import 'stylesheets/main.scss';


document.addEventListener('DOMContentLoaded', () => {

  const store = configureStore();

  window.getState = store.getState;
  window.dispatch = store.dispatch;

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
    module.hot.accept('./views/Root', () => { render(Root) })
  }

});
