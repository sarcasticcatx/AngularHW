import { Component, input, output } from '@angular/core';
import { TODOList } from '../../model/todo.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [NgClass],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
list = input.required<TODOList>();

todoOutput = output<TODOList>();

onTodoClick() {
  this.todoOutput.emit(this.list());
}


}
