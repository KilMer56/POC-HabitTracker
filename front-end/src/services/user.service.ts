import { Response } from '@/types/service.type';
import { SignUpParams, SignInParams, SessionInfo } from '@/types/user.type';
import http from './index';

class UserService {
    async get(id: string) {
      return await http.get(`/users/${id}`);
    }

    async signUp(data: SignUpParams): Promise<Response<SessionInfo>> {
      try {
        const res = await http.post(`/users`, data);
        return new Response<SessionInfo>(false, res.data, res.status, 'Signed Up succesfully');
      } catch (error) {
        return new Response<SessionInfo>(true, null, error.response.status, error.response.data.message);
      }
    }

    async signIn(data: SignInParams): Promise<Response<SessionInfo>> {
      try {
        const res = await http.post('/auth/login', data);
        return new Response<SessionInfo>(false, res.data, res.status, 'Signed In succesfully');
      } catch (error) {
        return new Response<SessionInfo>(true, null, error.response.status, error.response.data.message);
      }
    }
}

export default new UserService();
