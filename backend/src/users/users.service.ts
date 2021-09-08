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

  async findOne(userID: string): Promise<User | undefined> {
    return this.usersRepository.findOne({
      where: {
        userID: userID,
      },
    });
  }

  async getMe(userID: User['userID']): Promise<GetUserDTO> {
    const user = await this.usersRepository.findOne({
      where: {
        userID: userID,
      },
      select: ['userID', 'bio', 'name'],
    });
    if (!user) {
      throw new BadRequestException('no user found');
    }
    return user;
  }

  async getUsers(): Promise<User[]> {
    return await this.usersRepository.find();
  }
}
