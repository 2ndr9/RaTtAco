import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class createTaskDTO {
  @ApiProperty()
  @IsNotEmpty()
  name!: string;
  @ApiProperty()
  description!: string;
  @ApiProperty()
  isPrivate!: boolean;
  @ApiProperty()
  tags!: string[];
}

export class TagOfGetRanking {
  @ApiProperty()
  name!: string;
  @ApiProperty()
  id!: number;
}

export class RecordOfGetRanking {
  @ApiProperty()
  userName!: string;
  @ApiProperty()
  rank!: number;
  @ApiProperty({
    description:
      '世界協定時からの経過ミリ秒。DateをgetTime()したもの。new Date(startTime)すれば、Date型に変換可能',
  })
  startTime!: number;
  @ApiProperty({ description: '経過ミリ秒' })
  durationTime!: number;
}

export class GetRankingDTO {
  @ApiProperty()
  taskName!: string;
  @ApiProperty()
  taskID!: number;
  @ApiProperty()
  description!: string;
  @ApiProperty({ type: TagOfGetRanking, isArray: true })
  tags!: TagOfGetRanking[];
  @ApiProperty({ type: RecordOfGetRanking, isArray: true })
  records!: RecordOfGetRanking[];
}

export class TaskOFgetTasksOfGivenTag {
  @ApiProperty()
  id!: number;
  @ApiProperty()
  name!: string;
  @ApiProperty()
  isPrivate!: boolean;
  @ApiProperty()
  description!: string;
}

export class GetTasksOfGivenTag {
  @ApiProperty()
  tagID!: number;
  @ApiProperty()
  tagName!: string;
  @ApiProperty()
  tasks!: TaskOFgetTasksOfGivenTag[];
}
