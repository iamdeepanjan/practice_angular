import { effect, Injectable, signal } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoappService {

  todos = signal<Todo[]>(this.getTodoFromLocal());

  allTodos = this.todos.asReadonly();

  constructor(){
    effect(() => this.saveTodoTolocal());
  }

  addtodo(todo: Todo) {
    this.todos.update((oldTodos) => [...oldTodos, todo])
  }

  updateTodo(newTodo: Todo) {
    this.todos.update((oldTodos) => oldTodos.map(todo => todo.id === newTodo.id ? newTodo : todo))
  }

  removeTodo(selectedTodo: Todo){
    this.todos.update((oldTodos) => oldTodos.filter(todo => todo.id !== selectedTodo.id))
  }

  private getTodoFromLocal(): Todo[]{
    const storedTodos = localStorage.getItem('todos');
    return storedTodos?JSON.parse(storedTodos):[]
  }

  private saveTodoTolocal(){
    localStorage.setItem('todos', JSON.stringify(this.todos()));
  }

}
