import '../styles/main.scss';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import DevTools from './containers/DevTools';
import configureStore from './store/configureStore';

const store = configureStore();

document.addEventListener('DOMContentLoaded', () => {
  const el = document.createElement('div');
  el.id = 'app';
  document.body.appendChild(el);
  render(
    <Provider store={store}>
      <section>
        <h1>Hello, world!</h1>
        <DevTools />
      </section>
    </Provider>,
    el
  );
});
