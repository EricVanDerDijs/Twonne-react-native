export const mockSignin = jest.fn(
  async (identifier: string, password: string) => {
    if (identifier === 'superadmin' && password === '123456') {
      return {
        data: {
          user: {
            username: 'superadmin',
            email: 'superadmin@mail.com',
            role: 'superadmin',
          },
          token: 'token-string',
        },
      };
    } else {
      if (password !== '123456') {
        throw {
          error: {
            id: 'BAD_CREDENTIALS',
            code: '0003',
            description: 'Your username/email or password is not correct.',
          },
        };
      } else {
        throw {
          error: {
            id: 'USER_NOT_FOUND',
            code: '0002',
            description: 'Email or username does not exists.',
          },
        };
      }
    }
  },
);

const Session = {
  signin: mockSignin,
};

export default Session;
