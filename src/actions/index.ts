// tslint:disable:no-empty-interface
import { Action, IConversation, IMessage } from 'common';

export const CONVERSATIONS_REQUEST = 'CONVERSATIONS_REQUEST';
export const CONVERSATIONS_SUCCESS = 'CONVERSATIONS_SUCCESS';
export const CONVERSATIONS_FAILURE = 'CONVERSATIONS_FAILURE';

export const MESSAGES_REQUEST = 'MESSAGES_REQUEST';
export const MESSAGES_SUCCESS = 'MESSAGES_SUCCESS';
export const MESSAGES_FAILURE = 'MESSAGES_FAILURE';

export interface ConversationsRequestAction extends Action<typeof CONVERSATIONS_REQUEST> {}
export interface ConversationsSuccessAction extends Action<typeof CONVERSATIONS_SUCCESS> {
  conversations: IConversation[];
}
export interface ConversationsFailureAction extends Action<typeof CONVERSATIONS_FAILURE> {}

export interface MessagesRequestAction extends Action<typeof MESSAGES_REQUEST> {
  conversationUuid: string;
}
export interface MessagesSuccessAction extends Action<typeof MESSAGES_SUCCESS> {
  messages: IMessage[];
  conversationUuid: string;
}
export interface MessagesFailureAction extends Action<typeof MESSAGES_FAILURE> {}

export const loadConversations = (): ConversationsRequestAction => (
  { type: CONVERSATIONS_REQUEST }
);

export const setConversations = (conversations: IConversation[]): ConversationsSuccessAction => {
  return { type: CONVERSATIONS_SUCCESS, conversations };
};

export const loadMessages = (conversationUuid: string): MessagesRequestAction => (
  { type: MESSAGES_REQUEST, conversationUuid }
);

// tslint:disable-next-line:max-line-length
export const setMessages = (conversationUuid: string, messages: IMessage[]): MessagesSuccessAction => {
  return { type: MESSAGES_SUCCESS, messages, conversationUuid };
};
