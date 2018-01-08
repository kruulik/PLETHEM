import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'; // required for HMR
import merge from 'lodash/merge';

import configureStore from 'store/configureStore';
import Root from 'containers/Root';

import 'stylesheets/main.scss';

// import 'services/scripts/jquery-3.1.1.min.js';
import 'services/scripts/opencpu-0.4';


document.addEventListener('DOMContentLoaded', () => {

  const store = configureStore();

  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.ocpu.seturl("http://localhost:5656/ocpu/library/plethembase/R");


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
    module.hot.accept('./containers/Root', () => { render(Root) })
  }

});
