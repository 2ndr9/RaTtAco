import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users/users.controller';
import { User } from './users/users.entity';
import { UsersModule } from './users/users.module';
import { TasksController } from './tasks/tasks.controller';
import { TasksModule } from './tasks/tasks.module';
import { Task } from './tasks/tasks.entity';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { TagsController } from './tags/tags.controller';
import { TagsModule } from './tags/tags.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'rattaco-local',
      password: 'rattaco-pass',
      database: 'rattaco',
      entities: [User, Task],
      synchronize: true,
    }),
    UsersModule,
    TasksModule,
    AuthModule,
    TagsModule,
  ],
  controllers: [UsersController, TasksController, AuthController, TagsController],
})
export class AppModule {}
