import { Store } from "./main";

interface User extends Object {
    isConnected: boolean
}

class UserStore extends Store<User> {
    protected data(): User {
        return {
            isConnected: false
        };
    }

    async connect(): Promise<boolean> {
        this.state.isConnected = true;
        return true;
    }
}

export const userStore: UserStore = new UserStore()