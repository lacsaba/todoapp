import { Injectable } from '@nestjs/common';

import { Todo } from '@todoapp/data';

@Injectable()
export class AppService {
  todos: Todo[] = [{ title: 'Todo1' }, { title: 'Todo2' }];

  addTodo() {
    this.todos.push({
      title: `Random ${Math.floor(Math.random() * 100)}`
    });
  }
}
