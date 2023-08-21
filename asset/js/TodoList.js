import { TodoItem } from './TodoItem.js';

export class TodoList {
  constructor() {
    this.todos = [];
  }

  addTodo(text) {
    const todo = new TodoItem(text);
    this.todos.push(todo);
  }

  updateTodo(todo) {
    const index = this.todos.findIndex(item => item === todo);
    if (index !== -1) {
      this.todos[index].completed = todo.completed;
    }
  }

  deleteTodo(index) {
    this.todos.splice(index, 1);
  }
}