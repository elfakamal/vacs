import { Action, IMessage, State } from 'common';
import { ActionsObservable, combineEpics, Epic } from 'redux-observable';
import * as Rx from 'rxjs';

import {
  ADD_MESSAGE_FAILURE,
  ADD_MESSAGE_REQUEST,
  ADD_MESSAGE_SUCCESS,
  AddMessageFailureAction,
  AddMessageRequestAction,
  CONVERSATIONS_REQUEST,
  CONVERSATIONS_SUCCESS,
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

type TEpic = Epic<Action<string>, State>;

/**
 *
 * @param action$
 */
const getConversationsEpic: TEpic = (
  action$: ActionsObservable<Action<typeof CONVERSATIONS_REQUEST>>,
): Rx.Observable<Action<typeof CONVERSATIONS_SUCCESS>> => (
  action$.ofType(CONVERSATIONS_REQUEST)
    .mergeMap(() => (
      Rx.Observable.fromPromise(getConversations())
      .map(setConversations)
    ),
  )
);

/**
 *
 * @param action$
 */
const getMessagesEpic: TEpic = (action$: ActionsObservable<Action<typeof MESSAGES_REQUEST>>) =>
  action$.ofType(MESSAGES_REQUEST)
    .mergeMap((action: MessagesRequestAction) => (
      Rx.Observable.fromPromise(getMessages(action.conversationId))
        .map((messages: IMessage[]) => setMessages(action.conversationId, messages))
    ));

  /**
   *
   * @param action$
   */
const addMessageEpic: TEpic = (
  action$: ActionsObservable<Action<typeof ADD_MESSAGE_REQUEST>>,
): Rx.Observable<Action<typeof ADD_MESSAGE_SUCCESS | typeof ADD_MESSAGE_FAILURE>> =>
  action$.ofType(ADD_MESSAGE_REQUEST)
    .mergeMap((action: AddMessageRequestAction) => (
      Rx.Observable.fromPromise(addMessage(action.conversationId, action.message))
        .map((message: IMessage) => setAddedMessage(action.conversationId, message))
        .catch((error: any): Rx.Observable<AddMessageFailureAction> => (
          Rx.Observable.of(errorAddMessage(error))
        ))
    ));

export default combineEpics(getConversationsEpic, getMessagesEpic, addMessageEpic);
