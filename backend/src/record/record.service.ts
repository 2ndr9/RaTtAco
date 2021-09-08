import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from 'src/tasks/tasks.entity';
import { TasksService } from 'src/tasks/tasks.service';
import { Repository } from 'typeorm';
import { PostEndTimeDTO } from './record.dto';
import { UserTask } from './userTask.entity';

@Injectable()
export class RecordService {
  constructor(
    @InjectRepository(UserTask)
    private readonly userTaskRepository: Repository<UserTask>,
    private readonly tasksService: TasksService,
  ) {}

  async createUserTaskAsNeededAndInsertStartTime(
    startTime: Date,
    userID: string,
    taskID: number,
  ): Promise<void> {
    const task = await this.tasksService.findOne(taskID);
    if (!task) throw new BadRequestException('そのtaskIDのtaskはないよ〜');

    // Date型だとミリ秒ない説
    // Date型だとミリ秒ない説
    // Date型だとミリ秒ない説
    // Date型だとミリ秒ない説
    // Date型だとミリ秒ない説
    // Date型だとミリ秒ない説
    // Date型だとミリ秒ない説
    // Date型だとミリ秒ない説
    // Date型だとミリ秒ない説
    // Date型だとミリ秒ない説
    // Date型だとミリ秒ない説
    // Date型だとミリ秒ない説
    // Date型だとミリ秒ない説

    const userTask = await this.userTaskRepository.findOne({
      where: { taskID: taskID, userID: userID },
    });
    if (!userTask) {
      const newUserTask = new UserTask(userID, taskID, startTime);
      await this.userTaskRepository.save(newUserTask);
    } else {
      await this.userTaskRepository.update(userTask.id, {
        startTime: startTime,
      });
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

    await this.userTaskRepository.update(taskID, {
      endTime: endTime,
    });
  }
}
