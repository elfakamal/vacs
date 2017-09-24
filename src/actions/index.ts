// tslint:disable:no-empty-interface
import { Action, IConversation, IMessage } from 'common';

export const CONVERSATIONS_REQUEST = 'CONVERSATIONS_REQUEST';
export const CONVERSATIONS_SUCCESS = 'CONVERSATIONS_SUCCESS';
export const CONVERSATIONS_FAILURE = 'CONVERSATIONS_FAILURE';

export interface ConversationsRequestAction extends Action<typeof CONVERSATIONS_REQUEST> {}
export interface ConversationsSuccessAction extends Action<typeof CONVERSATIONS_SUCCESS> {
  conversations: IConversation[];
}
export interface ConversationsFailureAction extends Action<typeof CONVERSATIONS_FAILURE> {}

export const loadConversations = (): ConversationsRequestAction => (
  { type: CONVERSATIONS_REQUEST }
);

export const setConversations = (conversations: IConversation[]): ConversationsSuccessAction => {
  return { type: CONVERSATIONS_SUCCESS, conversations };
};

export const MESSAGES_REQUEST = 'MESSAGES_REQUEST';
export const MESSAGES_SUCCESS = 'MESSAGES_SUCCESS';
export const MESSAGES_FAILURE = 'MESSAGES_FAILURE';

export interface MessagesRequestAction extends Action<typeof MESSAGES_REQUEST> {
  conversationId: number;
}
export interface MessagesSuccessAction extends Action<typeof MESSAGES_SUCCESS> {
  messages: IMessage[];
  conversationId: number;
}
export interface MessagesFailureAction extends Action<typeof MESSAGES_FAILURE> {}

export const loadMessages = (conversationId: number): MessagesRequestAction => (
  { type: MESSAGES_REQUEST, conversationId }
);

// tslint:disable-next-line:max-line-length
export const setMessages = (conversationId: number, messages: IMessage[]): MessagesSuccessAction => {
  return { type: MESSAGES_SUCCESS, messages, conversationId };
};

export const ADD_MESSAGE_REQUEST = 'ADD_MESSAGE_REQUEST';
export const ADD_MESSAGE_SUCCESS = 'ADD_MESSAGE_SUCCESS';
export const ADD_MESSAGE_FAILURE = 'ADD_MESSAGE_FAILURE';

export interface AddMessageRequestAction extends Action<typeof ADD_MESSAGE_REQUEST> {
  conversationId: number;
  message: string;
}
export interface AddMessageSuccessAction extends Action<typeof ADD_MESSAGE_SUCCESS> {
  conversationId: number;
  message: IMessage;
}
export interface AddMessageFailureAction extends Action<typeof ADD_MESSAGE_FAILURE> {
  error: any;
}

// tslint:disable-next-line:max-line-length
export const requestAddMessage = (conversationId: number, message: string): AddMessageRequestAction => {
  return { type: ADD_MESSAGE_REQUEST, conversationId, message };
};
// tslint:disable-next-line:max-line-length
export const setAddedMessage = (conversationId: number, message: IMessage): AddMessageSuccessAction => {
  return { type: ADD_MESSAGE_SUCCESS, conversationId, message };
};
export const errorAddMessage = (error: any): AddMessageFailureAction => {
  return { type: ADD_MESSAGE_FAILURE, error };
};
