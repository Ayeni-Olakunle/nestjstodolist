import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todos } from './todos.entity';

@Injectable()
export class TodosService {
    constructor(
        @InjectRepository(Todos)
        private todosRepository: Repository<Todos>,
    ) {}
    
    async findAll(): Promise<Todos[]> {
        return this.todosRepository.find();
    }

    async create(todo: Partial<Todos>): Promise<Todos> {
        const newTodo = this.todosRepository.create(todo);
        return this.todosRepository.save(newTodo);
    }

    async update(id: number, updatedFields: Partial<Todos>): Promise<Todos> {
        await this.todosRepository.update(id, updatedFields);
        return this.todosRepository.findOneBy({ id });
    }

    async delete(id: number): Promise<void> {
        await this.todosRepository.delete(id);
    }


}
