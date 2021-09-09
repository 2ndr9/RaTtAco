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
import { createTaskDTO, GetRankingDTO, GetTasksOfGivenTag } from './tasks.dto';
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
    description:
      'recordsは、ソートして返すよ〜。startTimeは世界協定時からの経過ミリ秒。new Date(startTime)すればDate型に変換可能。durationTimeの単位はミリ秒。',
  })
  async getRanking(@Param('taskID') taskID: number): Promise<GetRankingDTO> {
    const res = await this.tasksService.getRanking(taskID);
    return res;
  }

  @Get(':tagName')
  @ApiParam({ name: 'tagName' })
  @ApiResponse({
    type: GetTasksOfGivenTag,
  })
  async getTasksOfGivenTag(
    @Param('tagName') tagName: string,
  ): Promise<GetTasksOfGivenTag> {
    return await this.tasksService.getTasksOfGivenTag(tagName);
  }
}
