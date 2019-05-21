import {
  IPartialSessionObject,
  IUserData,
  SessionActionTypes,
} from './types';

// actions declarations
export const SESSION_TOKEN_ADD = 'SESSION_TOKEN_ADD';
export const SESSION_TOKEN_REMOVE = 'SESSION_TOKEN_REMOVE';
export const SESSION_UPDATE = 'SESSION_UPDATE';
export const SESSION_USER_ADD = 'SESSION_USER_ADD';
export const SESSION_USER_EMAIL_SET = 'SESSION_USER_EMAIL_SET';

export const addToken = (token: string): SessionActionTypes => ({
  type: SESSION_TOKEN_ADD,
  payload: {
    token,
  },
});

export const removeToken = (): SessionActionTypes => ({
  type: SESSION_TOKEN_REMOVE,
});

export const updateSession = (sessionObject: IPartialSessionObject): SessionActionTypes => ({
  type: SESSION_UPDATE,
  payload: {
    sessionObject,
  },
});

export const addUser = (userData: IUserData): SessionActionTypes => ({
  type: SESSION_USER_ADD,
  payload: {
    userData,
  },
});

export const setUserEmail = (email: string): SessionActionTypes => ({
  type: SESSION_USER_EMAIL_SET,
  payload: { email },
});
