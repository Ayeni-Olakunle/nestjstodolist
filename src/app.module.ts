import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosModule } from './todos/todos.module';
import { AuthModule } from './auth/auth.module';
// import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'todos_database.sqlite',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),

    TodosModule,
    AuthModule,
    // UsersModule
],

providers: [AuthService],

})

export class AppModule {}
