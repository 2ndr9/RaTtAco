import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksModule } from 'src/tasks/tasks.module';
import { RecordController } from './record.controller';
import { RecordService } from './record.service';
import { UserTask } from './userTask.entity';

@Module({
  controllers: [RecordController],
  providers: [RecordService],
  imports: [TypeOrmModule.forFeature([UserTask]), TasksModule],
})
export class RecordModule {}
