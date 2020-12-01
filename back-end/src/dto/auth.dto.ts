export class CreateUserDto {
    readonly firstname: string;
    readonly lastname: string;
    readonly email: string;
    readonly password: string;
}

export class LogInDto {
    access_token: string;
}

export class UserProfileDto {
    _id: string;
    firstname: string;
    lastname: string;
}