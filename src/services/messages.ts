import 'isomorphic-fetch';
import * as urlJoin from 'url-join';

import { API_ROOT } from '../constants';
import Request from './Request';

export const getMessages = async (conversationId: number) => (
  await Request.get(urlJoin(API_ROOT, 'messages', `?conversation=${conversationId}`))
);

export const addMessage = async (conversationId: number, message: string) => {
  const iMessage = {
    conversation: conversationId,
    date: Date.now(),
    text: message,
  };

  const url = urlJoin(API_ROOT, 'messages');
  return await Request.post(url, iMessage);
};
