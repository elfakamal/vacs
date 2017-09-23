import { State } from 'common';
import {
  applyMiddleware,
  compose,
  createStore,
  GenericStoreEnhancer,
} from 'redux';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';

import rootEpic from '../epics';
import reducer from '../reducers';

let enhancer: GenericStoreEnhancer;
const epicMiddleware = createEpicMiddleware(rootEpic);

if (window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
  enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(
    compose(applyMiddleware(epicMiddleware, createLogger())),
  );
} else {
  enhancer = compose(applyMiddleware(epicMiddleware, createLogger()));
}

export default (initialState: State) =>
  createStore<State>(reducer, initialState, enhancer);
