import {
  Body,
  Request,
  Controller,
  Get,
  Post,
  UseGuards,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { createTaskDTO, GetRankingDTO } from './tasks.dto';
import { Task } from './tasks.entity';
import { TasksService } from './tasks.service';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async createTask(
    @Request() req: any,
    @Body() createTaskDTO: createTaskDTO,
  ): Promise<void> {
    // user情報taskにcreatorつけてないから、いらないっちゃいらない
    await this.tasksService.createTask(createTaskDTO);
  }

  @Get()
  @ApiOperation({ deprecated: true })
  async getTasks(): Promise<Task[]> {
    return await this.tasksService.getTasks();
  }

  @Get('ranking/:taskID')
  @ApiParam({ name: 'taskID' })
  @ApiResponse({
    type: GetRankingDTO,
    status: HttpStatus.OK,
    description: 'ソートして返すよ〜',
  })
  async getRanking(@Param('taskID') taskID: number): Promise<GetRankingDTO> {
    const res = await this.tasksService.getRanking(taskID);
    return res;
  }
}
