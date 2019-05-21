import { SessionActionTypes } from '../../actions/session/types';
import { SessionState } from './types';
import {
  SESSION_TOKEN_ADD,
  SESSION_TOKEN_REMOVE,
  SESSION_UPDATE,
  SESSION_USER_ADD,
  SESSION_USER_EMAIL_SET,
} from '../../actions/session';

const initialState: SessionState = {
  email: '',
  role: '',
  token: '',
  username: '',
};

export const sessionReducer = (state = initialState, action: SessionActionTypes): SessionState => {
  switch (action.type) {
    case SESSION_TOKEN_ADD:
      const { token } = action.payload;
      return {
        ...state,
        token,
      };

    case SESSION_UPDATE:
      const { sessionObject } = action.payload;
      return {
        ...state,
        ...sessionObject,
      };

    case SESSION_TOKEN_REMOVE:
      return {
        ...state,
        token: initialState.token,
      };

    case SESSION_USER_ADD:
      const { userData } = action.payload;
      return {
        ...state,
        ...userData,
      };

    case SESSION_USER_EMAIL_SET:
      return {
        ...state,
        email: action.payload.email,
      };

    default:
      return state;
  }
}