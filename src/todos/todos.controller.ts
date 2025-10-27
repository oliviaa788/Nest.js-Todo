import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  async getAll() {
    return this.todosService.findAll(); 
  }

  @Post()
  async create(@Body() todo: { title: string; description: string; completed: boolean }) {
    return this.todosService.create(todo); 
  }

  @Get(':id')
async getOne(@Param('id') id: string) {
  return this.todosService.findOne(Number(id));
}

@Put(':id')
async update(@Param('id') id: string, @Body() todo: any) {
  return this.todosService.update(Number(id), todo);
}

@Delete(':id')
async remove(@Param('id') id: string) {
  return this.todosService.remove(Number(id));
}
}
