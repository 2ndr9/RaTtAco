import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { UsersController } from './users/users.controller';
import { User } from './users/users.entity';
import { UsersModule } from './users/users.module';
import { TasksController } from './tasks/tasks.controller';
import { TasksModule } from './tasks/tasks.module';
import { Task } from './tasks/tasks.entity';

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
  ],
  controllers: [AppController, UsersController, TasksController],
})
export class AppModule {}
