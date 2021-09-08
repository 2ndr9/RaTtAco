import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecordController } from './record.controller';
import { RecordService } from './record.service';
import { UserTask } from './userTask.entity';

@Module({
  controllers: [RecordController],
  providers: [RecordService],
  imports: [TypeOrmModule.forFeature([UserTask])],
})
export class RecordModule {}
