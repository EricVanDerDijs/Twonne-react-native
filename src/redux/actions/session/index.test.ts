import thunk from 'redux-thunk';
import { signin, SESSION_UPDATE } from './index';
import configMockStore from 'redux-mock-store';
// types
import { SessionDispatch } from './types';
import * as mockSession from 'src/modules/api/__mocks__/Session';
import * as Session from 'src/modules/api/Session';
const { mockSignin } = Session as any as typeof mockSession;

const middlewares = [thunk];
const mockStore = configMockStore<any, SessionDispatch>(middlewares);
jest.mock('../../../modules/api/Session');

describe('sesion actions', () => {
  beforeEach(() => {
    mockSignin.mockClear();
  });

  it(`should dispatch SESSION_UPDATE with user data in the payload`, async () => {
    const store = mockStore({});
    await store.dispatch(signin('superadmin', '123456'));
    const actionDispatched = store.getActions()[0];
    const expectedPayload = {
      sessionObject: {
        role: 'superadmin',
        email: 'superadmin@mail.com',
        username: 'superadmin',
        token: 'token-string',
      },
    };
    expect(actionDispatched.type).toBe(SESSION_UPDATE);
    expect(actionDispatched.payload).toEqual(expectedPayload);
  });
});
