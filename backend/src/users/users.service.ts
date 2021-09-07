import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './users.dto';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usresRepository: Repository<User>,
  ) {}

  async createUser(createUserDTO: CreateUserDTO): Promise<void> {
    const user = new User(
      createUserDTO.name,
      createUserDTO.bio,
      createUserDTO.email,
      createUserDTO.password,
    );
    try {
      await this.usresRepository.save(user);
    } catch (e) {
      throw new BadRequestException(e.detail);
    }
  }

  async getUsers(): Promise<User[]> {
    return await this.usresRepository.find();
  }
}
