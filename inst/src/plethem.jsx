import React from 'react';
import ReactDOM from 'react-dom';
import jquery from 'jquery';
window.$ = window.jQuery = jquery;
import { AppContainer } from 'react-hot-loader'; // required for HMR
import merge from 'lodash/merge';

import configureStore from 'store/configureStore';
import Root from 'containers/Root';

import 'stylesheets/main.scss';

// import opencpu from 'opencpu.js';


document.addEventListener('DOMContentLoaded', () => {

  const store = configureStore();

  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.jQuery ? opencpu : null;



  const renderApp = Component => {
    ReactDOM.render(
      <AppContainer>
        <Component store={store}/>
      </AppContainer>,
      document.getElementById('root'),
    )
  };

  renderApp(Root)

  if (window) {
    window.ocpu.seturl("http://localhost:5656/ocpu/library/plethembase/R");
  }

  // Webpack Hot Module Replacement API
  if (module.hot) {
    module.hot.accept('./containers/Root', () => { render(Root) })
  }

});
