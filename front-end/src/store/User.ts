import { Store } from "./index";
import service from "../service/index";
import axios from 'axios'

interface User extends Object {
    isConnected: boolean
}

class UserStore extends Store<User> {
    prefix: string = 'users';

    protected data(): User {
        return {
            isConnected: false
        };
    }

    async signUp(userInfo: any): Promise<boolean> {
        delete userInfo.confirmPassword;

        await service().post(this.prefix+'/create', userInfo);

        return true;
    }

    async connect(): Promise<boolean> {
        this.state.isConnected = true;
        return true;
    }
}

export const userStore: UserStore = new UserStore()