import {
  Body,
  Request,
  Controller,
  Get,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { createTaskDTO } from './tasks.dto';
import { Task } from './tasks.entity';
import { TasksService } from './tasks.service';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  async createTask(
    @Request() req: any,
    @Body() createTaskDTO: createTaskDTO,
  ): Promise<void> {
    // const user = req.user;
    await this.tasksService.createTask(createTaskDTO);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  async getTasks(): Promise<Task[]> {
    return await this.tasksService.getTasks();
  }
}
