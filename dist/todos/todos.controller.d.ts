import { TodosService } from './todos.service';
export declare class TodosController {
    private readonly todosService;
    constructor(todosService: TodosService);
    getAll(): Promise<import("./todo.entity").Todo[]>;
    create(todo: {
        title: string;
        description: string;
        completed: boolean;
    }): Promise<import("./todo.entity").Todo>;
    getOne(id: string): Promise<import("./todo.entity").Todo | null>;
    update(id: string, todo: any): Promise<import("./todo.entity").Todo | null>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
