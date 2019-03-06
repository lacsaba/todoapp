import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {Todo} from '@todoapp/data'

@Component({
  selector: 'todoapp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todos: Todo[];

  constructor(private http: HttpClient) {
    this.fetch()
  }

  fetch() {
    this.http.get('/api/todos').subscribe((data: any) => this.todos = data)
  }

  addTodo() {
    this.http.post('/api/add', {}).subscribe(() => this.fetch())
  }
}
