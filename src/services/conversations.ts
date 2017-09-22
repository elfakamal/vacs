import * as urlJoin from 'url-join';

import { API_ROOT } from '../constants';

export default async () => await (await fetch(urlJoin(API_ROOT, 'conversations'))).json();
