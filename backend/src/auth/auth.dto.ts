import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, IsNotEmpty } from 'class-validator';

export class LoginDTO {
  @ApiProperty()
  @IsAlphanumeric()
  userID!: string;

  @ApiProperty()
  @IsNotEmpty()
  password!: string;
}

export class RegisterDTO {
  @ApiProperty()
  @IsNotEmpty()
  name!: string;

  @ApiProperty()
  bio!: string;

  @ApiProperty()
  @IsAlphanumeric()
  userID!: string;

  @ApiProperty()
  @IsNotEmpty()
  password!: string;
}
