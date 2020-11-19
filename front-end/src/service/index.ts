import axios from 'axios';

export default () => {
  const options: any = {
    baseURL: 'http://localhost:8085/'
  };

  const instance = axios.create(options);
  
  return instance;
};