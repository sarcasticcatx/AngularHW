import { Component, input, OnInit, signal } from '@angular/core';
import { TODOList, TODOStatus } from '../../model/todo.model';
import { TodoComponent } from '../todo/todo.component';
import { TodoDetailsComponent } from '../todo-details/todo-details.component';
import { CommonModule } from '@angular/common';

//common module se sodrzhi od ngIf, ngFor, ngClass i ngStyle 
//tie se koristat za upravuvanje uslovno renderiranje , klasi i stilovi
@Component({
  selector: 'app-todo-panel',
  standalone: true,
  imports: [CommonModule, TodoComponent, TodoDetailsComponent],
  templateUrl: './todo-panel.component.html',
  styleUrl: './todo-panel.component.scss',
})
export class TodoPanelComponent implements OnInit {
  readonly todoStatus = TODOStatus;



  
//in this case TODOList e parametar chij argument kje bide prazna niza
//a ([]) ni kazhuva deka prvicno e prazna taa niza
  todoList = input<TODOList[]>([]);
  //ovie se koristat za dinamichno upravuvanje so podatocite
  //kontrolira vidlivost na naslovot
  isTitleShown = signal(false);
  //ja sodrzhli listata na filtrirani listi
  filteredList = signal<TODOList[]>([]);
//go sodrzhi momentalno izbraniot to do list
  selectedList = signal<TODOList>(null);

  constructor() {
    console.log('constructor called', this.todoList());
   
  }

  // In this code snippet, ngOnInit is used 
  // to log the initial state of todoList,
  //  set the initial value of filteredList to match todoList,
  //  and then log the new state of filteredList.
  ngOnInit(): void {
    console.log('innit mate', this.todoList());
    this.filteredList.set(this.todoList());

    console.log(this.filteredList());
  }
//filterting by status
//
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
//.set i .update se metodi koi ja izmenuvaat vrednosta na signalot 
// The .set() method is used to replace the current value
//  of a signal with a new value. This method is 
//  straightforward and is the primary way to assign a 
//  new value to a signal. It does not care about the
//   current value of the signal; it simply replaces it 
//   with the new value provided.

// The .update() method, on the other hand,
//  takes a transformation function as its 
//  argument. This function receives the 
//  current value of the signal and returns
//   the new value