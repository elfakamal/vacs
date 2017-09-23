import { Action } from 'common';
import { ActionsObservable } from 'redux-observable';
import * as Rx from 'rxjs';

import {
  CONVERSATIONS_REQUEST,
  setConversations,
} from '../actions';

import getConversations from '../services/conversations';

export default (action$: ActionsObservable<Action<string>>) =>
  action$.ofType(CONVERSATIONS_REQUEST)
    .mergeMap(() => Rx.Observable.fromPromise(getConversations())
      .map(setConversations));
