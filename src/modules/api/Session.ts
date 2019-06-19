import { api } from './api-config';
import { AxiosPromise } from 'axios';

const SIGNIN_ROUTE = 'signin';

const  Session = {
  signin: (identifier: string, password: string): Promise<AxiosPromise> => {
    return api.post(
      SIGNIN_ROUTE,
      {
        identifier,
        password,
      },
    );
  },
};

export default Session;
