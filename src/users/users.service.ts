import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  // CREATE
  async create(email: string, data: Partial<User>): Promise<User> {
    const user = this.userRepository.create({
      email,
      ...data,
    });
    return this.userRepository.save(user);
  }

  // READ (by id)
  async findById(id: number): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return user;
  }

  // UPDATE
  async update(
    id: number,
    email?: string,
    data?: Partial<User>,
  ): Promise<User> {
    const user = await this.findById(id);

    Object.assign(user, {
      ...(email && { email }),
      ...data,
    });

    return this.userRepository.save(user);
  }

  // DELETE
  async remove(id: number): Promise<void> {
    const user = await this.findById(id);
    await this.userRepository.remove(user);
  }
}
