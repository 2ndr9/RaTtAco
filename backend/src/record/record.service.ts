import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/tasks/tasks.entity';
import { Repository } from 'typeorm';
import { PostEndTimeDTO } from './record.dto';
import { UserTask } from './userTask.entity';

@Injectable()
export class RecordService {
  constructor(
    @InjectRepository(UserTask)
    private readonly userTaskRepository: Repository<UserTask>,
  ) {}

  async upsertUserTaskAndInsertStartTime(
    startTime: Date,
    userID: string,
    taskID: number,
  ): Promise<void> {
    const task = await this.userTaskRepository.findOne({
      where: { taskID: taskID, userID: userID },
    });
    if (!task) {
      const userTask = new UserTask(userID, taskID);
      await this.userTaskRepository.save(userTask);
      userTask.startTime = startTime;
      await this.userTaskRepository.save(userTask);
    } else {
      task.startTime = startTime;
      // これでいけるんだっけ？
      await this.userTaskRepository.save(task);
    }
  }

  async insertEndTime(
    endTime: Date,
    taskID: number,
    userID: string,
  ): Promise<void> {
    const task = await this.userTaskRepository.findOne({
      where: { taskID: taskID, userID: userID },
    });
    if (!task) throw new BadRequestException('そのidのtaskはないよ〜');
    task.endTime = endTime;
    // これでいけるんだっけ？
    await this.userTaskRepository.save(task);
  }
}
