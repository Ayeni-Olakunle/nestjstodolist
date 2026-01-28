import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { Body, Get, Post, Param, Put, Delete } from '@nestjs/common';
import { User } from './users.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

    @Post()
    async create(@Body() user: Partial<User>) {
        const { email, ...data } = user;
        return this.usersService.create(email, data);
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        return this.usersService.findById(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() userData: { email: string; [key: string]: any }) {
        const { email, ...data } = userData;
        return this.usersService.update(id, email, data);
    }
    @Delete(':id')
    async delete(@Param('id') id: string) {
        await this.usersService.delete(id);
    }
}