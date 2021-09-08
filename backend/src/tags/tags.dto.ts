import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class CreateTagDTO {
  @ApiProperty()
  @IsNotEmpty()
  tagName!: string;
  @ApiProperty()
  @IsNotEmpty()
  taskID!: number;
}
