import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { createTaskDTO } from './tasks.dto';
import { Task } from './tasks.entity';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private readonly tasksRepository: Repository<Task>,
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
    return await this.tasksRepository.find();
  }
}
