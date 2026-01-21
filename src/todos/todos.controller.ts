import { Controller, Get, Post, Param, Put, Delete } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Body } from '@nestjs/common';
import { Todos } from './todos.entity';


@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) {}

    @Get()
    async findAll() {
        return this.todosService.findAll();
    }

    @Post()
    async create(@Body() todo: Partial<Todos>) {
        return this.todosService.create(todo);
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() updatedFields: Partial<Todos>) {
        return this.todosService.update(id, updatedFields);
    }

    @Delete(':id')
    async delete(@Param('id') id: number) {
        await this.todosService.delete(id);
    }
}
