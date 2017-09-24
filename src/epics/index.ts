import { Action, IMessage } from 'common';
import { ActionsObservable, combineEpics } from 'redux-observable';
import * as Rx from 'rxjs';

import {
  ADD_MESSAGE_REQUEST,
  AddMessageFailureAction,
  AddMessageRequestAction,
  CONVERSATIONS_REQUEST,
  errorAddMessage,
  MESSAGES_REQUEST,
  MessagesRequestAction,
  setAddedMessage,
  setConversations,
  setMessages,
} from '../actions';

import getConversations from '../services/conversations';
import {
  addMessage,
  getMessages,
} from '../services/messages';

export default combineEpics(
  (action$: ActionsObservable<Action<string>>) => action$.ofType(CONVERSATIONS_REQUEST)
    .mergeMap(() => Rx.Observable.fromPromise(getConversations())
      .map(setConversations)),

  (action$: ActionsObservable<Action<string>>) => action$.ofType(MESSAGES_REQUEST)
    .mergeMap((action: MessagesRequestAction) => (
      Rx.Observable.fromPromise(getMessages(action.conversationId))
        .map((messages: IMessage[]) => setMessages(action.conversationId, messages))
    )),

  (action$: ActionsObservable<Action<string>>) => action$.ofType(ADD_MESSAGE_REQUEST)
    .mergeMap((action: AddMessageRequestAction) => (
      Rx.Observable.fromPromise(addMessage(action.conversationId, action.message))
        .map((message: IMessage) => setAddedMessage(action.conversationId, message))
        .catch((error: any): Rx.Observable<AddMessageFailureAction> => (
          Rx.Observable.of(errorAddMessage(error))
        ))
    )),
);
