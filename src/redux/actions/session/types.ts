import {
  SESSION_TOKEN_ADD,
  SESSION_TOKEN_REMOVE,
  SESSION_UPDATE,
  SESSION_USER_ADD,
  SESSION_USER_EMAIL_SET,
} from './index';

interface UserData {
  username: string;
  email: string;
  role: string;
}

interface PartialSessionObject {
  email?: string;
  role?: string;
  token?: string;
  username?: string;
}

interface AddTokenAction {
  type: typeof SESSION_TOKEN_ADD;
  payload: {
    token: string,
  };
}

interface RemoveTokenAction {
  type: typeof SESSION_TOKEN_REMOVE
}

interface UpdateSessionData {
  type: typeof SESSION_UPDATE;
  payload: {
    sessionObject: PartialSessionObject,
  };
}

interface AddUserData {
  type: typeof SESSION_USER_ADD;
  payload: UserData;
}

interface SetUserEmailAction {
  type: typeof SESSION_USER_EMAIL_SET;
  payload: { email: string };
}

export type SessionActionTypes = AddTokenAction | RemoveTokenAction
  | UpdateSessionData | AddUserData | SetUserEmailAction;
