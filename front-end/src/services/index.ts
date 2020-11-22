import axios from 'axios';
import UserStore from "@/store/user.store"

const Axios = axios.create({
  baseURL: 'http://localhost:3000',
  headers: {
    'Content-type': 'application/json',
  },
});

Axios.interceptors.request.use(
  (config) => {
    let token = UserStore.getToken();

    if (token) {
      config.headers['Authorization'] = `Bearer ${ token }`;
    }

    return config;
  }
);

export default Axios;