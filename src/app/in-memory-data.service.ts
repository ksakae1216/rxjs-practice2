import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Todo } from './todo/todo.module';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }


  createDb() {
    const todos: Todo[] = [
      { id: 11, text: 'test1', checked: false, createdAt: 1573279856, updatedAt: 1573279856 },
      { id: 12, text: 'test2', checked: false, createdAt: 1573279856, updatedAt: 1573279856 },
      { id: 13, text: 'test3', checked: false, createdAt: 1573279856, updatedAt: 1573279856 },
      { id: 14, text: 'test4', checked: false, createdAt: 1573279856, updatedAt: 1573279856 },
      { id: 15, text: 'test5', checked: false, createdAt: 1573279856, updatedAt: 1573279856 },
      { id: 16, text: 'test6', checked: false, createdAt: 1573279856, updatedAt: 1573279856 },
    ];
    return { todos };
  }

  genId(todos: Todo[]): number {
    return todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 11;
  }

}
