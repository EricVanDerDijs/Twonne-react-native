const ACTIONS: { [s: string]: string } = {
  SESSION_COLORS_ADD: 'SESSION_COLORS_ADD',
  SESSION_TOKEN_ADD: 'SESSION_TOKEN_ADD',
  SESSION_TOKEN_REMOVE: 'SESSION_TOKEN_REMOVE',
  SESSION_UPDATE: 'SESSION_UPDATE',
  SESSION_USER_ADD: 'SESSION_USER_ADD',
  SESSION_USER_EMAIL_SET: 'SESSION_USER_EMAIL_SET',
  SESSION_WORKSPACE_ADD: 'SESSION_WORKSPACE_ADD',
};

interface InitialState {
  colors: string[];
  email: string;
  role: string;
  token: string;
  username: string;
  workspace: string;
}

const initialState: InitialState = {
  colors: [],
  email: '',
  role: '',
  token: '',
  username: '',
  workspace: '',
};

export default function(state = initialState, action){
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