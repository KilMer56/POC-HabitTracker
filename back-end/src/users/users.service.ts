import { Model } from 'mongoose';
import { Injectable, ForbiddenException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './user.schema';
import { CreateUserDto } from '../dto/create-user.dto'

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User') private UserModel: Model<UserDocument>
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = await this.findOne(createUserDto.email);

    if(user){
      throw new ForbiddenException('The user already exist');
    }
    
    const createdUser = new this.UserModel(createUserDto);
    const result = await createdUser.save();

    return result;
  }

  async findAll(): Promise<User[]> {
    return this.UserModel.find().exec();
  }

  async findOne(email: string): Promise<User | undefined> {
    return this.UserModel.findOne({ email });
  }
}