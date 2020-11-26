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
        user: undefined
      };
    }

    isAuthentificated(): boolean {
        return this.state.token.length > 0;
    }

    setUser(user: UserInfo) {
      this.state.user = user;
    }

    setToken(token: string) {
      this.state.token = token;
    }

    getFullName(): string {
      return `${this.getState().user?.firstname} ${this.getState().user?.lastname}`;
    }

    getToken(): string {
      return this.getState().token;
    }

    getUser(): UserInfo | undefined {
      return this.getState().user;
    }

    clean() {
      this.state.token = "";
      this.state.user = undefined;
    }
}

export default new UserStore();
