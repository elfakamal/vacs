import { Action, ReducersMapObject, State } from 'common';

import {
  CONVERSATIONS_SUCCESS,
  ConversationsSuccessAction,
  MESSAGES_SUCCESS,
  MessagesSuccessAction,
} from '../actions';
import { INITIAL_STATE } from '../constants';

const handleActions = (cases: ReducersMapObject) => (
  (state = INITIAL_STATE, action: Action<string>) => (
    (!action || !cases[action.type]) ? state : cases[action.type](state, action)
  )
);

export default handleActions({
  [CONVERSATIONS_SUCCESS]: (state, action: ConversationsSuccessAction): State => ({
    ...state,
    conversations: action.conversations,
  }),

  [MESSAGES_SUCCESS]: (state, { conversationUuid, messages }: MessagesSuccessAction) => ({
    ...state,
    conversations: state.conversations.map(conversation => (
      conversation.uuid !== conversationUuid ? conversation : { ...conversation, messages }
    )),
  }),
});
