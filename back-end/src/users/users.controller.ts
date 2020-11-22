import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.schema';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
}