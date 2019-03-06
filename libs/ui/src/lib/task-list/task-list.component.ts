import { Component, Input } from '@angular/core';
import { Todo } from '@todoapp/data';

@Component({
  selector: 'todoapp-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() todos: Todo[];
}
