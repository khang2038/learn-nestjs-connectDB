import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/user.entity';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '01658205896',
      database: 'learn-nest',
      entities: [UserEntity],
      synchronize: true,
    }),
    UsersModule,
  ],
})
export class AppModule {}
