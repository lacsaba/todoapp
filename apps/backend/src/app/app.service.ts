import { Injectable } from '@nestjs/common';

export type Todo = { title: string };

@Injectable()
export class AppService {
  todos: Todo[] = [{ title: 'Todo1' }, { title: 'Todo2' }];

  addTodo() {
    this.todos.push({
      title: `Random ${Math.floor(Math.random() * 100)}`
    });
  }
}
