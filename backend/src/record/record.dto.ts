import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class PostStartTimeDTO {
  @ApiProperty()
  @IsNotEmpty()
  taskID!: number;
  @ApiProperty()
  @IsNotEmpty()
  startTime!: Date;
}

export class PostEndTimeDTO {
  @ApiProperty()
  @IsNotEmpty()
  taskID!: number;
  @ApiProperty()
  @IsNotEmpty()
  endTime!: Date;
}
