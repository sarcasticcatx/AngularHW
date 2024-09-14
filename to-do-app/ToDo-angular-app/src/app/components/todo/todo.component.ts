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
  //input.requried se koristi za parametri koi se zadolzhitelni 
  //i mora da se prisutni 
  // Inputs are signals. The values of an
  //  input are exposed as a Signal. 
  //  the signal always holds the latest value
  //   of the input that is bound from the parent
list = input.required<TODOList>();

todoOutput = output<TODOList>();

onTodoClick() {
  this.todoOutput.emit(this.list());
}


}
