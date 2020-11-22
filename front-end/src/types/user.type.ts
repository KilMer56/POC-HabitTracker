export interface SignInParams {
    email: string;
    password: string;
}

export interface SignUpParams {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
}

export interface SessionInfo {
    access_token: string;
}

export interface UserInfo {
    _id: string;
    firstname: string;
    lastname: string;
}
