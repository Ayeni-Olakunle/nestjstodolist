import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    const { email, ...data } = createUserDto;
    return this.usersService.create(email, data);
  }

  // @Get(':id')
  // async findById(
  //   @Param('id', ParseIntPipe) id: number,
  // ): Promise<User> {
  //   return this.usersService.findById(id);
  // }

  // @Put(':id')
  // async update(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() updateUserDto: UpdateUserDto,
  // ): Promise<User> {
  //   const { email, ...data } = updateUserDto;
  //   return this.usersService.update(id, email, data);
  // }

  // @Delete(':id')
  // async remove(
  //   @Param('id', ParseIntPipe) id: number,
  // ): Promise<void> {
  //   await this.usersService.remove(id);
  // }
}
