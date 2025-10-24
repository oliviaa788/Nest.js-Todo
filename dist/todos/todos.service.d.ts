import { Todo } from './todo.model';
export declare class TodosService {
    private todos;
    getAllTodos(): Todo[];
    getTodoById(id: string): Todo | undefined;
    createTodo(todoData: Todo): Todo;
    updateTodo(id: string, updatedData: Partial<Todo>): Todo | undefined;
    deleteTodo(id: string): void;
}
