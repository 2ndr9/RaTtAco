import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class PostRecordDTO {
  @ApiProperty()
  @IsNotEmpty()
  taskID!: number;
  @ApiProperty()
  @IsNotEmpty()
  startTime!: number;
  @ApiProperty()
  @IsNotEmpty()
  endTime!: number;
}
