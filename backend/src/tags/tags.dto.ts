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

export class GetAllTag {
  @ApiProperty()
  @IsNotEmpty()
  id!: number;
  @ApiProperty()
  @IsNotEmpty()
  name!: string;
}
