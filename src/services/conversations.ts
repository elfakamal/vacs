import { IConversation } from 'common';
import * as urlJoin from 'url-join';

import { API_ROOT } from '../constants';

export default async (): Promise<IConversation[]> => await (
  await fetch(urlJoin(API_ROOT, 'conversations'))
).json();
