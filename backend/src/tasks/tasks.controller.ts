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

  // @Get('hoge')
  // hoge() {
  //   let a = new Date();

  //   const c = setTimeout(() => {
  //     const b = new Date();
  //     console.log(a.getTime() - b.getTime());
  //   }, 5000);
  // }

  @Get('ranking/:taskID')
  @ApiParam({ name: 'taskID' })
  @ApiResponse({
    type: GetRankingDTO,
    status: HttpStatus.OK,
    description: 'ソートして返すよ〜',
  })
  async getRanking(@Param('taskID') taskID: number): Promise<GetRankingDTO> {
    const data: GetRankingDTO = {
      taskName: 'make yakisoba',
      description: 'やきそばをつくるよ！！材料は…',
      taskID: 1,
      tags: [
        {
          name: 'cooking',
          id: 1,
        },
        {
          name: 'yakisoba',
          id: 2,
        },
      ],
      records: [
        {
          userName: 'ieki',
          rank: 1,
          startTime: new Date(),
          durationTime: 100000,
        },
        {
          userName: 'matsushita',
          rank: 2,
          startTime: new Date(),
          durationTime: 110000,
        },
        {
          userName: 'tsunoda',
          rank: 3,
          startTime: new Date(),
          durationTime: 120000,
        },
      ],
    };
    await this.tasksService.getRanking(taskID);
    return data;
  }
}
