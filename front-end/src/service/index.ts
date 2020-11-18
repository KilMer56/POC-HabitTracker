import axios from 'axios';

export default () => {
  const options: any = {
    baseURL: 'http://localhost:3000/'
  };

  const instance = axios.create(options);
  
  return instance;
};