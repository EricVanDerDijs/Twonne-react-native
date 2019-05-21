import { SessionState } from './types';

const initialState: SessionState = {
  email: '',
  role: '',
  token: '',
  username: '',
};

export default function (state = initialState, action): SessionState{
  switch (action.type) {

    case ACTIONS.SESSION_TOKEN_ADD:
      const { token } = action.payload;
      return {
        ...state,
        token,
      };

    case ACTIONS.SESSION_WORKSPACE_ADD:
      const { workspace } = action.payload;
      return {
        ...state,
        workspace,
      };

    case ACTIONS.SESSION_UPDATE:
      const { sessionObject } = action.payload;
      return {
        ...state,
        ...sessionObject,
      };

    case ACTIONS.SESSION_TOKEN_REMOVE:
      return {
        ...state,
        token: initialState.token,
      };

    case ACTIONS.SESSION_USER_ADD:
      const { username, email, role } = action.payload;
      return {
        ...state,
        email,
        role,
        username,
      };

    case ACTIONS.SESSION_USER_EMAIL_SET:
      return {
        ...state,
        email: action.payload.email,
      };

    case ACTIONS.SESSION_COLORS_ADD:
      const { colors } = action.payload;
      return {
        ...state,
        colors,
      };

    default:
      return state;
  }
}