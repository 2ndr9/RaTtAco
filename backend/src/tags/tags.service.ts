import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TasksService } from 'src/tasks/tasks.service';
import { Repository } from 'typeorm';
import { GetAllTag } from './tags.dto';
import { Tag } from './tags.entity';
import { TagTask } from './tagTask.entity';

@Injectable()
export class TagsService {
  constructor(
    @InjectRepository(Tag)
    private readonly tagsRepository: Repository<Tag>,
    @InjectRepository(TagTask)
    private readonly tagTaskRepository: Repository<TagTask>,
    private readonly taskService: TasksService,
  ) {}

  async createTagAsNeededAndAttachToTask(
    tagName: string,
    taskID: number,
  ): Promise<void> {
    const task = await this.taskService.findOne(taskID);
    if (!task) throw new BadRequestException('そのtaskIDのtaskはないよ〜');

    const existingTag = await this.tagsRepository.findOne({
      where: {
        name: tagName,
      },
    });

    // あったらそのまま、なかったらつくったtag
    const tag = existingTag
      ? existingTag
      : await this.tagsRepository.save(new Tag(tagName));

    const existingTagTask = await this.tagTaskRepository.findOne({
      where: { tagID: tag.id, taskID: taskID },
    });

    // TagTaskがない場合のみ、つくる
    if (!existingTagTask) {
      const tagTask = new TagTask(tag.id, taskID);
      await this.tagTaskRepository.save(tagTask);
    }
  }

  async getAllTags(): Promise<GetAllTag[]> {
    return await this.tagsRepository.find();
  }
}
