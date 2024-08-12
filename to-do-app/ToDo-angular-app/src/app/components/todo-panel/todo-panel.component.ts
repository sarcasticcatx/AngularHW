import { Component, input, OnInit, signal } from '@angular/core';
import { TODOList, TODOStatus } from '../../model/todo.model';
import { TodoComponent } from '../todo/todo.component';
import { TodoDetailsComponent } from '../todo-details/todo-details.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-panel',
  standalone: true,
  imports: [CommonModule, TodoComponent, TodoDetailsComponent],
  templateUrl: './todo-panel.component.html',
  styleUrl: './todo-panel.component.scss',
})
export class TodoPanelComponent implements OnInit {
  readonly todoStatus = TODOStatus;

  

  todoList = input<TODOList[]>([]);
  isTitleShown = signal(false);
  filteredList = signal<TODOList[]>([]);
  selectedList = signal<TODOList>(null);

  constructor() {
    console.log('constructor called', this.todoList());
  }

  ngOnInit(): void {
    console.log('innit mate', this.todoList());
    this.filteredList.set(this.todoList());

    console.log(this.filteredList());
  }
//filterting by status
  filteredListByStatus(status: TODOStatus) {
    this.filteredList.set(
      this.todoList().filter((list) => list.status === status)
    );
  }

  toggleTitleShown() {
    this.isTitleShown.update((prev) => !prev);
    console.log(this.selectedList());
    this.isTitleShown.set(true)
  }

  onTodoSelect(list: TODOList) {
    this.selectedList.set(list);
    console.log(this.selectedList());
  }
}
