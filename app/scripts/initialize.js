import '../styles/main.scss';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

import DevTools from './containers/DevTools';
import App from './containers/App';


const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  const el = document.createElement('div');
  el.id = 'app';
  document.body.appendChild(el);
  render(
    <Provider store={store}>
      <main>
        <App />
        <DevTools />
      </main>
    </Provider>,
    el
  );
});
