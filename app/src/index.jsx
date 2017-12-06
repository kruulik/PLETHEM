import React from 'react';
import {render} from 'react-dom';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import App from './App.jsx';
import './styles/main.scss';

renderWithHotReload(App);

if (module.hot) {
  module.hot.accept('./App.jsx', () => {
    const App = require('./App.jsx').default;
    renderWithHotReload(App);
  });
}

function renderWithHotReload(App) {
  render (
      <App />
    , document.getElementById('starter')
  );
}
