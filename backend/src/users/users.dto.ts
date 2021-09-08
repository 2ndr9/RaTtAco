import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric } from 'class-validator';

export class GetUserDTO {
  @ApiProperty()
  name!: string;
  @ApiProperty()
  bio!: string;
  @ApiProperty()
  userID!: string;
}
