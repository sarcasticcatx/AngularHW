import { NgClass } from '@angular/common';
import { Component, input, OnDestroy, output } from '@angular/core';
import { TODOList } from '../../model/todo.model';

//ngClass se koristi za dinamicno primenuvanje na css klasi, ngStyle za dinamichno primenuvanje na css stilovi 
@Component({
  selector: 'app-todo-details',
  standalone: true,
  imports: [NgClass],
  templateUrl: './todo-details.component.html',
  styleUrl: './todo-details.component.scss',
})
export class TodoDetailsComponent implements OnDestroy {
  selectedList = input<TODOList>(null);

  hideOutput = output();

  onClearClick() {
    this.hideOutput.emit();
  }

  ngOnDestroy(): void {
    console.log("on destroy was called")
  }
}
//ngOnDestroy e isto lifecycle hook za chistenje na kod koga komponentata se unishtuva
//se koristi za osloboduvanje na resursi, otkazhuvanje na pretplati ili
//vrshene na drugi zavrshni aktivnosti
