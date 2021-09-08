import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TasksService } from 'src/tasks/tasks.service';
import { Repository } from 'typeorm';
import { PostRecordDTO } from './record.dto';
import { UserTask } from './userTask.entity';

@Injectable()
export class RecordService {
  constructor(
    @InjectRepository(UserTask)
    private readonly userTaskRepository: Repository<UserTask>,
    private readonly tasksService: TasksService,
  ) {}

  async createRecord(
    postRecordDTO: PostRecordDTO,
    userID: string,
  ): Promise<void> {
    const task = await this.tasksService.findOne(postRecordDTO.taskID);
    if (!task) throw new BadRequestException('そのtaskIDのtaskはないよ〜');

    const userTask = new UserTask(
      userID,
      postRecordDTO.taskID,
      postRecordDTO.startTime,
      postRecordDTO.endTime,
      new Date(postRecordDTO.endTime).getTime() -
        new Date(postRecordDTO.startTime).getTime(),
    );
    await this.userTaskRepository.save(userTask);
  }
}
