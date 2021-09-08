import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TasksService } from 'src/tasks/tasks.service';
import { Repository } from 'typeorm';
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

    const tag = await this.tagsRepository.findOne({
      where: {
        name: tagName,
      },
    });
    if (!tag) {
      const newTag = new Tag(tagName);
      const savedNewTag = await this.tagsRepository.save(newTag);
      const tagTask = new TagTask(savedNewTag.id, taskID);
      await this.tagTaskRepository.save(tagTask);
    } else {
      const tagTask = new TagTask(tag.id, taskID);
      await this.tagTaskRepository.save(tagTask);
    }
  }
}
