import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './todo.model';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getAll(): Todo[] {
    return this.todosService.getAllTodos();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Todo | undefined {
    return this.todosService.getTodoById(id);
  }

  @Post()
  create(@Body() todoData: Todo): Todo {
    return this.todosService.createTodo(todoData);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatedData: Partial<Todo>): Todo | undefined {
    return this.todosService.updateTodo(id, updatedData);
  }

  @Delete(':id')
  delete(@Param('id') id: string): void {
    return this.todosService.deleteTodo(id);
  }
}
