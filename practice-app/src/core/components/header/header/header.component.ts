import { Component } from '@angular/core';


//this stays empty, samo html-ot ili css-ot, ova se koristi za da se
//importira selektorot vo glavniot fajl
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
