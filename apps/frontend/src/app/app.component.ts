import { Component } from '@angular/core';

export type Todo = {title: string}

@Component({
  selector: 'todoapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Todo[] = [
    {title: 'Todo1'},
    {title: 'Todo2'}
  ]

  addTodo() {
    this.todos.push({
      title: `Random ${Math.floor(Math.random() * 100)}`
    })
  }
}
