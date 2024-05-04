import { Module } from '@nestjs/common';
import { TodoController } from '../../presentation/controller/todo/TodoController';
import { TodoService } from '../../service/todo/TodoService';

@Module({
  controllers: [TodoController],
  providers: [TodoService]
})
export class TodoModule {}
