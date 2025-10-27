import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) {}

  create(todoData: Partial<Todo>) {
    const todo = this.todoRepository.create(todoData);
    return this.todoRepository.save(todo);
  }

  findAll() {
    return this.todoRepository.find();
  }

  findOne(id: number) {
    return this.todoRepository.findOneBy({ id });
  }

  async update(id: number, data: Partial<Todo>) {
    await this.todoRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number) {
  const result = await this.todoRepository.delete(id);
  if (result.affected === 0) {
    throw new Error(`Todo with ID ${id} not found`);
  }
  return { message: `Todo with ID ${id} deleted successfully` };
}
}
