import { Module } from '@nestjs/common';
import { TodosController } from './todos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosService } from './todos.service';
import { Todos } from './todos.entity';

@Module({
  controllers: [TodosController],
  providers: [TodosService],
  imports: [TypeOrmModule.forFeature([Todos])],
})

export class TodosModule {}
 