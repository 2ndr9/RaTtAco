import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users/users.controller';
import { User } from './users/users.entity';
import { UsersModule } from './users/users.module';
import { TasksController } from './tasks/tasks.controller';
import { TasksModule } from './tasks/tasks.module';
import { Task } from './tasks/tasks.entity';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { TagsController } from './tags/tags.controller';
import { TagsModule } from './tags/tags.module';
import { UserTask } from './record/userTask.entity';
import { RecordModule } from './record/record.module';
import { Tag } from './tags/tags.entity';
import { TagTask } from './tags/tagTask.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DATABASE_URL,
      entities: [User, Task, UserTask, Tag, TagTask],
      synchronize: true,
      ssl: {
        rejectUnauthorized: false,
      },
      autoLoadEntities: true,
    }),
    UsersModule,
    TasksModule,
    AuthModule,
    TagsModule,
    RecordModule,
  ],
  controllers: [
    UsersController,
    TasksController,
    AuthController,
    TagsController,
  ],
})
export class AppModule {}
