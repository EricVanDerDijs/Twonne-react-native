import {
  SESSION_TOKEN_ADD,
  SESSION_TOKEN_REMOVE,
  SESSION_UPDATE,
  SESSION_USER_ADD,
  SESSION_USER_EMAIL_SET,
} from './index';

export interface IUserData {
  username: string;
  email: string;
  role: string;
}

export interface IPartialSessionObject {
  email?: string;
  role?: string;
  token?: string;
  username?: string;
}

interface IAddTokenAction {
  type: typeof SESSION_TOKEN_ADD;
  payload: {
    token: string,
  };
}

interface IRemoveTokenAction {
  type: typeof SESSION_TOKEN_REMOVE;
}

interface IUpdateSessionData {
  type: typeof SESSION_UPDATE;
  payload: {
    sessionObject: IPartialSessionObject,
  };
}

interface IAddUserData {
  type: typeof SESSION_USER_ADD;
  payload: {
    userData: IUserData,
  };
}

interface ISetUserEmailAction {
  type: typeof SESSION_USER_EMAIL_SET;
  payload: { email: string };
}

export type SessionActionTypes = IAddTokenAction | IRemoveTokenAction
  | IUpdateSessionData | IAddUserData | ISetUserEmailAction;
