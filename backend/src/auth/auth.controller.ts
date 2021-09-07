import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LoginDTO, RegisterDTO } from './auth.dto';
import { AuthService } from './auth.service';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // そのemailのuserがいるか、また、passは正しいか判断して、OKだったら、jwtを返す
  @Post('login')
  async login(@Body() loginDTO: LoginDTO): Promise<{ access_token: string }> {
    return await this.authService.login(loginDTO);
  }

  @Post('register')
  async register(
    @Body() registerDTO: RegisterDTO,
  ): Promise<{ access_token: string }> {
    return await this.authService.register(registerDTO);
  }
}
