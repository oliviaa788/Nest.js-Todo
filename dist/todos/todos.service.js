"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodosService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
let TodosService = class TodosService {
    todos = [];
    getAllTodos() {
        return this.todos;
    }
    getTodoById(id) {
        return this.todos.find(todo => todo.id === id);
    }
    createTodo(todoData) {
        const newTodo = { ...todoData, id: (0, uuid_1.v4)() };
        this.todos.push(newTodo);
        return newTodo;
    }
    updateTodo(id, updatedData) {
        const todo = this.todos.find(todo => todo.id === id);
        if (todo) {
            Object.assign(todo, updatedData);
        }
        return todo;
    }
    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }
};
exports.TodosService = TodosService;
exports.TodosService = TodosService = __decorate([
    (0, common_1.Injectable)()
], TodosService);
//# sourceMappingURL=todos.service.js.map