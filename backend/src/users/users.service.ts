import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';
import * as bcrypt from 'bcrypt';
import { RegisterDTO } from 'src/auth/auth.dto';
import { GetUserDTO } from './users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async findOne(email: string): Promise<User | undefined> {
    return this.usersRepository.findOne({
      where: {
        email: email,
      },
    });
  }

  async getMe(userID: User['id']): Promise<GetUserDTO> {
    return await this.usersRepository.findOne({
      where: {
        id: userID,
      },
      select: ['id', 'email', 'bio', 'name'],
    });
  }

  async getUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }
}
