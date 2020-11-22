import { UserInfo } from '@/types/user.type';
import { Store } from './index';

interface UserState {
    token: string;
    user: UserInfo | undefined;
}

class UserStore extends Store<UserState> {
    prefix = 'users';

    data(): UserState {
      return {
        token: '',
        user: undefined,
      };
    }

    setUser(user: UserInfo) {
      this.state.user = user;
    }

    setToken(token: string) {
      this.state.token = token;
    }

    getFullName(): string {
      return `${this.state.user?.firstname} ${this.state.user?.lastname}`;
    }

    getToken(): string {
      return this.state.token;
    }
}

export default new UserStore();
