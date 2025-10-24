import { TodosService } from './todos.service';
import { Todo } from './todo.model';
export declare class TodosController {
    private readonly todosService;
    constructor(todosService: TodosService);
    getAll(): Todo[];
    getOne(id: string): Todo | undefined;
    create(todoData: Todo): Todo;
    update(id: string, updatedData: Partial<Todo>): Todo | undefined;
    delete(id: string): void;
}
