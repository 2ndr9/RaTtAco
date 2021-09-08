import { Body, Controller, Get, HttpStatus, Param, Put } from '@nestjs/common';
import { ApiParam, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateTagDTO, GetAllTag } from './tags.dto';
import { Tag } from './tags.entity';
import { TagsService } from './tags.service';

@ApiTags('tags')
@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Put(':taskID')
  @ApiParam({ name: 'taskID' })
  async postTagAndAttachToTask(
    @Param('taskID') taskID: number,
    @Body() createTagDTO: CreateTagDTO,
  ): Promise<void> {
    await this.tagsService.createTagAsNeededAndAttachToTask(
      createTagDTO.tagName,
      taskID,
    );
  }

  @Get()
  @ApiResponse({ type: GetAllTag, isArray: true, status: HttpStatus.OK })
  async getAllTags(): Promise<GetAllTag[]> {
    return await this.tagsService.getAllTags();
  }
}
