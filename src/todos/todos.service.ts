import { Injectable } from '@nestjs/common';
import { Todo } from './todo.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TodosService {
  private todos: Todo[] = [];

  getAllTodos(): Todo[] {
    return this.todos;
  }

  getTodoById(id: string): Todo | undefined {
    return this.todos.find(todo => todo.id === id);
  }

  createTodo(todoData: Todo): Todo {
    const newTodo = { ...todoData, id: uuidv4() };
    this.todos.push(newTodo);
    return newTodo;
  }

  updateTodo(id: string, updatedData: Partial<Todo>): Todo | undefined {
    const todo = this.todos.find(todo => todo.id === id);
    if (todo) {
      Object.assign(todo, updatedData);
    }
    return todo;
  }

  deleteTodo(id: string): void {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
