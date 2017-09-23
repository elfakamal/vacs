import { Action, IMessage } from 'common';
import { ActionsObservable, combineEpics } from 'redux-observable';
import * as Rx from 'rxjs';

import {
  CONVERSATIONS_REQUEST,
  MESSAGES_REQUEST,
  MessagesRequestAction,
  setConversations,
  setMessages,
} from '../actions';

import getConversations from '../services/conversations';
import getMessages from '../services/messages';

export default combineEpics(
  (action$: ActionsObservable<Action<string>>) => action$.ofType(CONVERSATIONS_REQUEST)
    .mergeMap(() => Rx.Observable.fromPromise(getConversations())
      .map(setConversations)),

  (action$: ActionsObservable<Action<string>>) => action$.ofType(MESSAGES_REQUEST)
    .mergeMap((action: MessagesRequestAction) =>
      Rx.Observable.fromPromise(getMessages(action.conversationUuid))
        .map((messages: IMessage[]) => setMessages(action.conversationUuid, messages)),
    ),
);
