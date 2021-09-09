import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserTask } from 'src/record/userTask.entity';
import { Tag } from 'src/tags/tags.entity';
import { TagTask } from 'src/tags/tagTask.entity';
import { Repository } from 'typeorm';
import { createTaskDTO, GetRankingDTO, TagOfGetRanking } from './tasks.dto';
import { Task } from './tasks.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly tasksRepository: Repository<Task>,
    @InjectRepository(TagTask)
    private readonly tagTaskRepository: Repository<TagTask>,
    @InjectRepository(UserTask)
    private readonly userTaskRepository: Repository<UserTask>,
  ) {}

  async createTask(createTaskDTO: createTaskDTO): Promise<void> {
    const task = new Task(
      createTaskDTO.name,
      createTaskDTO.description,
      createTaskDTO.isPrivate,
    );
    try {
      await this.tasksRepository.save(task);
    } catch (e: any) {
      throw new BadRequestException(e.detail);
    }
  }

  async getTasks(): Promise<Task[]> {
    return await this.tasksRepository.find({ relations: ['tagTask'] });
  }

  async findOne(id: number): Promise<Tag | undefined> {
    return await this.tasksRepository.findOne({ where: { id: id } });
  }

  async getRanking(taskID: number): Promise<GetRankingDTO> {
    const task = await this.tasksRepository.findOne({
      where: { id: taskID },
      relations: ['tagTask', 'userTask'],
    });
    if (!task) throw new BadRequestException('not exist task of this task id.');

    const res: GetRankingDTO = {
      taskName: task.name,
      description: task.description,
      taskID: task.id,
      tags: [],
      records: [],
    };

    const tagTasks = await this.tagTaskRepository.find({
      where: { taskID: taskID },
      relations: ['tag'],
    });
    tagTasks.forEach((tagTask) => {
      const tag = {
        name: tagTask.tag.name,
        id: tagTask.tag.id,
      };
      res.tags.push(tag);
    });

    const userTasks = await this.userTaskRepository.find({
      where: { taskID: taskID },
      relations: ['user'],
      order: { duration: 'ASC' },
    });

    userTasks.forEach((userTask, index) => {
      const record = {
        userName: userTask.user.name,
        // bigIntはstringで返ってきちゃうから、Numberに変換
        startTime: Number(userTask.startTime),
        // bigIntはstringで返ってきちゃうから、Numberに変換
        endTime: Number(userTask.endTime),
        rank: index + 1,
        // bigIntはstringで返ってきちゃうから、Numberに変換
        durationTime: Number(userTask.duration),
      };
      res.records.push(record);
    });

    return res;
  }
}
