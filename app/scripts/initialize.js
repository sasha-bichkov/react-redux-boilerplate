import '../styles/main.scss';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';


const store = createStore(
  combineReducers({})
);


document.addEventListener('DOMContentLoaded', () => {
  const el = document.createElement('div');
  el.id = 'app';
  document.body.appendChild(el);
  render(
    <Provider store={store}>
      <h1>Hello, world!</h1>
    </Provider>,
    el
  );
});
