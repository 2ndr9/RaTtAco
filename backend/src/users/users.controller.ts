import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateUserDTO } from './users.dto';
import { User } from './users.entity';
import { UsersService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body() createUserDTO: CreateUserDTO): Promise<void> {
    await this.usersService.createUser(createUserDTO);
  }

  @Get()
  async getUser(): Promise<User[]> {
    return await this.usersService.getUsers();
  }
}
