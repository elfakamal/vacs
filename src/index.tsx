import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { INITIAL_STATE } from './constants';
import App from './containers/App';
import createStore from './store/dev';

const store = createStore(INITIAL_STATE);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// see https://react.rocks/example/google-map-react
