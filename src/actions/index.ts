// tslint:disable:no-empty-interface
import { Action, IConversation } from 'common';

export const CONVERSATIONS_REQUEST = 'CONVERSATIONS_REQUEST';
export const CONVERSATIONS_SUCCESS = 'CONVERSATIONS_SUCCESS';
export const CONVERSATIONS_FAILURE = 'CONVERSATIONS_FAILURE';

export interface ConversationRequestAction extends Action<typeof CONVERSATIONS_REQUEST> {}
export interface ConversationSuccessAction extends Action<typeof CONVERSATIONS_SUCCESS> {
  conversations: IConversation[];
}
export interface ConversationFailureAction extends Action<typeof CONVERSATIONS_FAILURE> {}

export const loadConversations = (): ConversationRequestAction => (
  { type: CONVERSATIONS_REQUEST }
);

export const setConversations = (conversations: IConversation[]): ConversationSuccessAction => {
  return { type: CONVERSATIONS_SUCCESS, conversations };
};
