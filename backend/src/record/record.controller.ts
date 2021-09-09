import {
  Body,
  Controller,
  Post,
  Put,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { PostRecordDTO } from './record.dto';
import { RecordService } from './record.service';

@ApiTags('record')
@Controller('record')
export class RecordController {
  constructor(private readonly recordService: RecordService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @ApiOperation({
    description:
      'startTimeとendTimeは、世界協定時からの経過ミリ秒。DateをgetTime()したもの。',
  })
  async postRecord(
    @Request() req: any,
    @Body() postRecordDTO: PostRecordDTO,
  ): Promise<any> {
    await this.recordService.createRecord(postRecordDTO, req.user.userID);
  }
}
