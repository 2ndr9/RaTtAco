import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from 'src/tasks/tasks.module';
import { TagsController } from './tags.controller';
import { Tag } from './tags.entity';
import { TagsService } from './tags.service';
import { TagTask } from './tagTask.entity';

@Module({
  providers: [TagsService],
  controllers: [TagsController],
  imports: [
    TypeOrmModule.forFeature([Tag, TagTask]),
    forwardRef(() => TasksModule),
  ],
  exports: [TagsService],
})
export class TagsModule {}
