import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ) {}

  getAllTodos(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  async getTodosByCompletion(isCompleted: boolean): Promise<Todo[]> {
    return this.todoRepository.find({ where: { isCompleted } });
  }

  getTodoById(id: number): Promise<Todo | null> {
    return this.todoRepository.findOne({ where: { id } });
  }

  createTodo(todoData: Partial<Todo>): Promise<Todo> {
    const newTodo = this.todoRepository.create(todoData);
    return this.todoRepository.save(newTodo);
  }

  async markTaskCompleted(id: number): Promise<Todo> {
    const task = await this.todoRepository.findOne({ where: { id } });
    if (!task) throw new NotFoundException(`Task with ID ${id} not found`);
    task.isCompleted = true;
    return this.todoRepository.save(task);
  }

  async deleteTodo(id: number): Promise<void> {
    await this.todoRepository.delete(id);
  }
}
