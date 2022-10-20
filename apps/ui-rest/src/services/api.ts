import Axios from 'axios';

export const api = Axios.create({
  baseURL: 'http://localhost:4321',
});
