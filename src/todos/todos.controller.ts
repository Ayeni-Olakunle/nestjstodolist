import {
  Controller,
  Get,
  Post,
  Param,
  Put,
  Delete,
  UseGuards,
  Req,
  Body,
} from '@nestjs/common';

import { TodosService } from './todos.service';
import { Todos } from './todos.entity';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { NotFoundException } from '@nestjs/common';
@Controller('todos')
@UseGuards(AuthGuard('jwt'))
export class TodosController {
    constructor(private readonly todosService: TodosService) {}

  @Get()
  findAll(@Req() req: Request) {
    return this.todosService.findAll(req.user['id']);
  }

  @Post()
  create(@Req() req: Request, @Body() todo: Partial<Todos>) {
    return this.todosService.create({
      ...todo,
      userId: req.user['id'],
    }, req.user['id']);
  }

  @Put(':id')
  update(
    @Req() req: Request,
    @Param('id') id: number,
    @Body() updatedFields: Partial<Todos>,
  ) {
    const userId = req.user['id'];
    return this.todosService.update(id, userId, updatedFields);
  }

  @Delete(':id')
  delete(@Req() req: Request, @Param('id') id: number) {
    const userId = req.user['id'];
    return this.todosService.delete(id, userId);
  }

}
