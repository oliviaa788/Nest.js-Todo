import { Controller, Get, Post, Patch, Delete, Param, Body, Query } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './todo.entity';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getTodos(@Query('completed') completed?: string): Promise<Todo[]> {
    if (completed !== undefined) {
      const isCompleted = completed === 'true';
      return this.todosService.getTodosByCompletion(isCompleted);
    }
    return this.todosService.getAllTodos();
  }

  @Get(':id')
  getTodo(@Param('id') id: string): Promise<Todo | null> {
    return this.todosService.getTodoById(Number(id));
  }

  @Post()
  createTodo(@Body() todoData: Partial<Todo>): Promise<Todo> {
    return this.todosService.createTodo(todoData);
  }

  @Patch(':id/complete')
  markCompleted(@Param('id') id: string): Promise<Todo> {
    return this.todosService.markTaskCompleted(Number(id));
  }

  @Delete(':id')
  deleteTodo(@Param('id') id: string): Promise<void> {
    return this.todosService.deleteTodo(Number(id));
  }
}
