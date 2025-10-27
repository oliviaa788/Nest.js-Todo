import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
export declare class TodosService {
    private readonly todoRepository;
    constructor(todoRepository: Repository<Todo>);
    create(todoData: Partial<Todo>): Promise<Todo>;
    findAll(): Promise<Todo[]>;
    findOne(id: number): Promise<Todo | null>;
    update(id: number, data: Partial<Todo>): Promise<Todo | null>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
