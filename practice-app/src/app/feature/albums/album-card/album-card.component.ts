import { Component, input, OnInit } from '@angular/core';
import { Album } from '../../../models/albums.model';
import { CommonModule } from '@angular/common';
import { HoverShadowDirective } from '../../../../core/components/header/header/directives/hover.shadow.directive';

@Component({
  selector: 'app-album-card',
  standalone: true,
  imports: [CommonModule,HoverShadowDirective],
  templateUrl: './album-card.component.html',
  styleUrl: './album-card.component.scss',
})
export class AlbumCardComponent implements OnInit {
  album = input.required<Album>(); //od ovde zema input i 
  // posle vo html-ot app componets.ts go povikuva so
  //  [ovie zagragi] ="istoto vnatre" and with for loop 
  //  za da se naredat po id

  ngOnInit(): void {
    console.log(this.album());
  }
}
