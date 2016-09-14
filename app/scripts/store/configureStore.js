import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../reducers';
import createSagaMiddleware from 'redux-saga';
import DevTools from '../containers/DevTools';

import { helloSaga } from '../sagas';

const sagaMiddleware = createSagaMiddleware();

const enhancer = compose(
  // Middleware you want to use in development:
  applyMiddleware(sagaMiddleware),
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument()
);

export default function configureStore(initialState) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const store = createStore(rootReducer, initialState, enhancer);
  sagaMiddleware.run(helloSaga);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers') /* default if you use Babel 6+ */)
    );
  }

  return store;
}
