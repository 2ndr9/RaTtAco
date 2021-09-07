import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { LoginDTO, RegisterDTO } from './auth.dto';
import * as bcrypt from 'bcrypt';
import { User } from 'src/users/users.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login(loginDTO: LoginDTO): Promise<{ access_token: string }> {
    const user = await this.usersService.findOne(loginDTO.email);

    if (!user) {
      throw new BadRequestException('invalid email');
    } else if (!(await bcrypt.compare(loginDTO.password, user.password))) {
      throw new UnauthorizedException('invalid password');
    } else {
      // jwtをdecodeしたときにpayloadの情報が得られる。userIDさえ得られればいいため、userIDのみとする
      const payload = { userID: user.id };
      return {
        access_token: this.jwtService.sign(payload),
      };
    }
  }

  async register(registerDTO: RegisterDTO): Promise<{ access_token: string }> {
    const hashedPass = await bcrypt.hash(registerDTO.password, 10);
    const user = new User(
      registerDTO.name,
      registerDTO.bio,
      registerDTO.email,
      hashedPass,
    );
    try {
      const savedUser = await this.usersRepository.save(user);
      const payload = { userID: savedUser.id };
      return {
        access_token: this.jwtService.sign(payload),
      };
    } catch (e) {
      throw new BadRequestException(e.detail);
    }
  }
}
