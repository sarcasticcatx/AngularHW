import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TODOList, TODOStatus } from './model/todo.model';
import { TodoPanelComponent } from './components/todo-panel/todo-panel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoPanelComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'TO DO APP';

  todoList: TODOList[] = [
    {
      id: 1,
      description: "Fold the laundry",
      assignedTo: "My mom",
      status: TODOStatus.IN_PROGRESS
    },
    {
      id: 2,
      description: "Finish homework",
      assignedTo: "Me",
      status: TODOStatus.IN_PROGRESS
    },
    {
      id: 3,
      description: "Read the new book you bought",
      assignedTo: "My sister",
      status: TODOStatus.NEW
    },
    {
      id: 4,
   
      description: "Go to the gym",
      assignedTo: "My brother",
      status: TODOStatus.NEW
    },
    {
      id: 5,
    
      description: "Meal prep for the week",
      assignedTo: "Me",
      status: TODOStatus.DONE
    },
    {
      id: 6,
   
      description: "Clean your room",
      assignedTo: "Me",
      status: TODOStatus.DONE
    },
    {
      id: 7,
      description: "Buy groceries for the week",
      assignedTo: "My dad",
      status: TODOStatus.NEW
    },
  ]
}
