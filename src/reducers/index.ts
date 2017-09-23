import { Action, ReducersMapObject, State } from 'common';

import { CONVERSATIONS_SUCCESS, ConversationSuccessAction } from '../actions';
import { INITIAL_STATE } from '../constants';

const handleActions = (cases: ReducersMapObject) => (
  (state: State = INITIAL_STATE, action: Action<string>): State => (
    (!action || !cases[action.type]) ? state : cases[action.type](state, action)
  )
);

export default handleActions({
  [CONVERSATIONS_SUCCESS]: (state: State, action: ConversationSuccessAction): State => ({
    ...state,
    conversations: action.conversations,
  }),
});
