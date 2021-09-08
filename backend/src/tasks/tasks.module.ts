import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserTask } from 'src/record/userTask.entity';
import { TagTask } from 'src/tags/tagTask.entity';
import { TasksController } from './tasks.controller';
import { Task } from './tasks.entity';
import { TasksService } from './tasks.service';

@Module({
  providers: [TasksService],
  controllers: [TasksController],
  imports: [TypeOrmModule.forFeature([Task, TagTask, UserTask])],
  exports: [TasksService],
})
export class TasksModule {}
