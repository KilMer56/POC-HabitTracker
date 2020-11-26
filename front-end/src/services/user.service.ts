import { Response } from '@/types/service.type';
import { SignUpParams, SignInParams, SessionInfo, UserInfo } from '@/types/user.type';
import http from './index';

class UserService {
    async get(id: string) {
      return await http.get(`/users/${id}`);
    }

    async signUp(data: SignUpParams): Promise<Response<SessionInfo>> {
      try {
        const res = await http.post(`/signUp`, data);
        return new Response<SessionInfo>(false, res.data, res.status, 'Signed Up succesfully');
      } catch (error) {
        return new Response<SessionInfo>(true, null, error.response.status, error.response.data.message);
      }
    }

    async signIn(data: SignInParams): Promise<Response<SessionInfo>> {
      try {
        const res = await http.post('/login', data);
        return new Response<SessionInfo>(false, res.data, res.status, 'Signed In succesfully');
      } catch (error) {
        return new Response<SessionInfo>(true, null, error.response.status, error.response.data.message);
      }
    }

    async getProfile(): Promise<Response<UserInfo>> {
      try {
        const res = await http.get('/profile');
        return new Response<UserInfo>(false, res.data, res.status, '');
      } catch (error) {
        return new Response<UserInfo>(true, null, error.response.status, error.response.data.message);
      }
    }
}

export default new UserService();
