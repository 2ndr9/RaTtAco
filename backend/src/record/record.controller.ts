import {
  Body,
  Controller,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { PostEndTimeDTO, PostStartTimeDTO } from './record.dto';
import { RecordService } from './record.service';

@ApiTags('record')
@Controller('record')
export class RecordController {
  constructor(private readonly recordService: RecordService) {}

  @Put('startTime')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async postStartTime(
    @Request() req: any,
    @Body() postStartTimeDTO: PostStartTimeDTO,
  ): Promise<void> {
    const user = req.user;
    await this.recordService.createUserTaskAsNeededAndInsertStartTime(
      postStartTimeDTO.startTime,
      user.userID,
      postStartTimeDTO.taskID,
    );
  }

  @Put('endTime')
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async postEndTime(
    @Request() req: any,
    @Body() postStartTimeDTO: PostEndTimeDTO,
  ): Promise<void> {
    await this.recordService.insertEndTime(
      postStartTimeDTO.endTime,
      postStartTimeDTO.taskID,
      req.user.userID,
    );
  }
}