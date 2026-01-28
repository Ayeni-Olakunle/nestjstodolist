import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';
import { Body, Get, Post, Param, Put, Delete } from '@nestjs/common';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

    @Post()
    async create(@Body() userData: { email: string; [key: string]: any }) {
        const { email, ...data } = userData;
        return this.usersService.create(email, data);
    }
}