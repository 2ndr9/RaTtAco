import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateTagDTO } from './tags.dto';
import { TagsService } from './tags.service';

@ApiTags('tags')
@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post()
  async postTagAndAttachToTask(
    @Body() createTagDTO: CreateTagDTO,
  ): Promise<void> {
    await this.tagsService.createTagAsNeededAndAttachToTask(
      createTagDTO.tagName,
      createTagDTO.taskID,
    );
  }
}
