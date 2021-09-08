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
  @ApiProperty()
  startTime!: Date;
  @ApiProperty({ description: '経過ミリ秒' })
  durationTime!: number;
}

export class GetRanking {
  @ApiProperty()
  taskName!: string;
  @ApiProperty()
  taskID!: number;
  @ApiProperty({ type: TagOfGetRanking, isArray: true })
  tags!: TagOfGetRanking[];
  @ApiProperty({ type: RecordOfGetRanking, isArray: true })
  records!: RecordOfGetRanking[];
}
