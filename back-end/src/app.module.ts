import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule.forRoot()],
      useFactory: async (configService: ConfigService) => {
        return ({
          uri: configService.get<string>('MONGODB_URI')
        })
      },
      inject: [ConfigService],
    }),
    UsersModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
