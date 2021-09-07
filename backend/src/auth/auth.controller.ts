import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoginDTO } from './auth.dto';
import { AuthService } from './auth.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDTO: LoginDTO): Promise<string> {
    return await this.authService.login();
  }

  //   @Post()
  //   async createUser(@Body() createUserDTO: CreateUserDTO): Promise<void> {
  //     await this.usersService.createUser(createUserDTO);
  //   }

  //   @Get()
  //   async getUser(): Promise<User[]> {
  //     return await this.usersService.getUsers();
  //   }
}
