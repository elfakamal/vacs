import 'isomorphic-fetch';
import * as urlJoin from 'url-join';

import { API_ROOT } from '../constants';

export default async (conversationUUID: string) => (
  await fetch(
    urlJoin(API_ROOT, 'messages'),
    {
      body: { conversation: conversationUUID },
    },
  )
).json();
