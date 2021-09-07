import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { createTaskDTO } from './tasks.dto';
import { Task } from './tasks.entity';
import { TasksService } from './tasks.service';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  async createTask(@Body() createTaskDTO: createTaskDTO): Promise<void> {
    await this.tasksService.createTask(createTaskDTO);
  }

  @Get()
  async getTasks(): Promise<Task[]> {
    return await this.tasksService.getTasks();
  }
}
