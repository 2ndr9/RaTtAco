import { ApiProperty } from '@nestjs/swagger';

export class GetUserDTO {
  @ApiProperty()
  name: string;
  @ApiProperty()
  bio: string;
  @ApiProperty()
  email: string;
  @ApiProperty()
  id: number;
}
