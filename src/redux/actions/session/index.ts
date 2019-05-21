import { SessionActionTypes } from './types';

// actions declarations
export const SESSION_COLORS_ADD = 'SESSION_COLORS_ADD';
export const SESSION_TOKEN_ADD = 'SESSION_TOKEN_ADD';
export const SESSION_TOKEN_REMOVE = 'SESSION_TOKEN_REMOVE';
export const SESSION_UPDATE = 'SESSION_UPDATE';
export const SESSION_USER_ADD = 'SESSION_USER_ADD';
export const SESSION_USER_EMAIL_SET = 'SESSION_USER_EMAIL_SET';
export const SESSION_WORKSPACE_ADD = 'SESSION_WORKSPACE_ADD';

export const addToken: SessionActionTypes = (token: string) => ({
  type: SESSION_TOKEN_ADD,
  payload: {
    token
  }
})

export const removeToken = () => ({
  type: SESSION_TOKEN_REMOVE
})

export const addWorkspace = workspace => ({
  type: SESSION_WORKSPACE_ADD,
  payload: {
    workspace
  }
})

export const updateSession = sessionObject => ({
  type: SESSION_UPDATE,
  payload: {
    sessionObject
  }
})

export const addUser = ({ username, email, role }) => ({
  type: SESSION_USER_ADD,
  payload: {
    username,
    email,
    role
  }
})

export const setUserEmail = (email) => ({
  type: SESSION_USER_EMAIL_SET,
  payload: { email }
})

export const addColors = (colors) => ({
  type: SESSION_COLORS_ADD,
  payload: {
    colors
  }
})
