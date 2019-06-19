import axios from 'axios';
import { API_URL } from 'src/config/env';

const api = axios.create({
  baseURL: API_URL,
});

export { api };
