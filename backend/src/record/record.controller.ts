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
import { PostRecordDTO } from './record.dto';
import { RecordService } from './record.service';

@ApiTags('record')
@Controller('record')
export class RecordController {
  constructor(private readonly recordService: RecordService) {}

  @Post()
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  async postRecord(
    @Request() req: any,
    @Body() postRecordDTO: PostRecordDTO,
  ): Promise<any> {
    await this.recordService.createRecord(postRecordDTO, req.user.userID);
  }
}
