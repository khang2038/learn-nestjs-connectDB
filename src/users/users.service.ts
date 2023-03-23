import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { UserDto } from './users.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>
  ) {}

  async save(dto: UserDto) {
    return this.userRepository.save(dto);
  }

  async deleteById(id: string): Promise<{ result: string }> {
    const deleteResult = await this.userRepository.softDelete(id);
    return { result: 'success' };
  }
}
