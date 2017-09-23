import {
  Action,
  ReducersMapObject,
  State,
} from 'common';

import { CONVERSATIONS_SUCCESS, ConversationSuccessAction } from '../actions';
import { INITIAL_STATE } from '../constants';

const handleActions = (cases: ReducersMapObject) => {
  return (state: State = INITIAL_STATE, action: Action<string>): State => {
    if (!action || !cases[action.type]) {
      return state;
    }

    return cases[action.type](state, action);
  };
};

export default handleActions({
  [CONVERSATIONS_SUCCESS]: (state: State, action: ConversationSuccessAction): State => {
    return {
      ...state,
      conversations: action.conversations,
    };
  },
});
