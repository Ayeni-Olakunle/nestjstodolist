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
  
  async findAll(userId: string) {
  return this.todosService.findAll(parseInt(userId));
}

async create(todo: Partial<Todos>) {
  const newTodo = this.todosService.create(todo, parseInt(todo.userId.toString()));
  return newTodo;
}

async update(id: number, userId: string, fields: Partial<Todos>) {
  const todo = await this.todosService.update(id, parseInt(userId), fields);

  if (!todo) {
    throw new NotFoundException('Todo not found');
  }

  Object.assign(todo, fields);

  return this.todosService.update(id, parseInt(userId), fields);
}

async delete(id: number, userId: string) {
  const todo = await this.todosService.findAll(parseInt(userId)).then(todos => todos.find(t => t.id === id));

  if (!todo) {
    throw new NotFoundException('Todo not found');
  }

  return this.todosService.delete(id, parseInt(userId));
}

}
