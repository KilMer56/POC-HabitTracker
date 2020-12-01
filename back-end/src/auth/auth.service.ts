import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User, } from '../users/user.schema';
import { CreateUserDto, LogInDto, UserProfileDto } from '../dto/auth.dto'

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<User | undefined> {
    const user = await this.usersService.findOne(email);

    if (user && user.password === password) {
      return user;
    }

    return null;
  }

  async login(user: any): Promise<LogInDto> {
    const payload = { username: user.email, sub: user._id };
    
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async signUp(newUserDto: CreateUserDto): Promise<LogInDto> {
    let user = await this.usersService.create(newUserDto);

    return this.login(user);
  }

  async getProfile(payload: any): Promise<UserProfileDto> {
    const user = await this.usersService.findOne(payload.email);

    return {
      _id: payload._id,
      firstname: user.firstname,
      lastname: user.lastname
    }
  }
}
