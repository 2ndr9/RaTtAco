import {
  BadRequestException,
  forwardRef,
  Inject,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
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
    @Inject(forwardRef(() => TasksService))
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

    const yomi = existingTag
      ? existingTag.yomi
      : (
          await axios({
            method: 'post',
            url: 'https://labs.goo.ne.jp/api/hiragana',
            headers: {
              // 'content-type': `application/x-www-form-urlencoded`,
              'content-type': `application/json`,
            },
            data: {
              app_id:
                '20b6581c612552377a3f7d0bed7debfeea6b18353adf6bef3b44b4a7339054d3',
              sentence: tagName,
              output_type: 'hiragana',
            },
          })
        ).data.converted;

    // あったらそのまま、なかったらつくったtag
    const tag = existingTag
      ? existingTag
      : await this.tagsRepository.save(new Tag(tagName, yomi));

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
