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

export class TagOfGetRanking {}

export class RecordOfGetRanking {
  @ApiProperty()
  userName!: string;
  @ApiProperty()
  rank!: number;
  @ApiProperty()
  startTime!: Date;
  @ApiProperty()
  durationTime!: number;
}

export class getRanking {
  @ApiProperty()
  regulationName!: string;
  @ApiProperty()
  tags!: TagOfGetRanking;
  @ApiProperty()
  records!: RecordOfGetRanking;
}
