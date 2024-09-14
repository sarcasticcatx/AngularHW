import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../core/components/header/header/header.component';
import { AlbumCardComponent } from './feature/albums/album-card/album-card.component';
import { Album } from './models/albums.model';
import { FilterPipe } from '../core/pipes/filter.pipe';
import { HoverShadowDirective } from '../core/components/header/header/directives/hover.shadow.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, AlbumCardComponent,FilterPipe,HoverShadowDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
searchValue = signal("");

onInputChange(event: Event) {
  const target = event.target as HTMLInputElement;
  this.searchValue.set(target.value)
}

  album: Album[] = [
      {
        id: 1,
        title: 'Thriller',
        artist: "Michael Jackson",
        genre: 'Pop, Rock, R&B',
        year: 1982,
        albumLength: 43,
        tracks: 9,
        typeOfAlbum: 'Studio',
        songwriters: 'Michael Jackson, Quincy Jones',
        producers: 'Quincy Jones',
      },
      {
        id: 2,
        title: 'The Joshua Tree',
        artist: "U2",
        genre: 'Rock',
        year: 1987,
        albumLength: 50,
        tracks: 11,
        typeOfAlbum: 'Studio',
        songwriters: 'Bono, The Edge, Adam Clayton, Larry Mullen Jr.',
        producers: 'Daniel Lanois, Brian Eno',
      },
      {
        id: 3,
        title: 'Back in Black',
        artist: "AC/DC",
        genre: 'Hard rock',
        year: 1980,
        albumLength: 42,
        tracks: 10,
        typeOfAlbum: 'Studio',
        songwriters: 'Angus Young, Malcolm Young, Bon Scott',
        producers: "Robert John 'Mutt' Lange",
      },
      {
        id: 4,
        title: 'Dark Side of the Moon',
        artist: "Pink Floyd",
        genre: 'Progressive rock',
        year: 1973,
        albumLength: 53,
        tracks: 12,
        typeOfAlbum: 'Studio',
        songwriters: 'Roger Waters, David Gilmour, Nick Mason, Richard Wright',
        producers: 'Alan Parsons, Roger Waters',
      },
      {
        id: 5,
        title: 'Born in the U.S.A.',
        artist: "Bruce Springsteen",
        genre: 'Heartland rock',
        year: 1984,
        albumLength: 40,
        tracks: 10,
        typeOfAlbum: 'Studio',
        songwriters: 'Bruce Springsteen',
        producers: 'Jon Landau, Bruce Springsteen',
      },
      {
        id: 6,
        title: 'Purple Rain',
        artist: "Prince",
        genre: 'Funk, Pop, Rock',
        year: 1984,
        albumLength: 45,
        tracks: 9,
        typeOfAlbum: 'Soundtrack',
        songwriters: 'Prince, Wendy Melvoin, Lisa Coleman',
        producers: 'Prince',
      },
      {
        id: 7,
        title: 'Rumours',
        artist: "Fleetwood Mac",
        genre: 'Soft rock',
        year: 1977,
        albumLength: 52,
        tracks: 11,
        typeOfAlbum: 'Studio',
        songwriters:
          'Stevie Nicks, Lindsey Buckingham, Christine McVie, John McVie',
        producers: 'Ken Caillat, Richard Dashut',
      },
      {
        id: 8,
        title: 'The Wall',
        artist: "Pink Floyd",
        genre: 'Progressive rock',
        year: 1979,
        albumLength: 64,
        tracks: 26,
        typeOfAlbum: 'Double Album',
        songwriters: 'Roger Waters, David Gilmour, Nick Mason, Richard Wright',
        producers: 'Bob Ezrin, James Guthrie',
      },
      {
        id: 9,
        title: 'Synchronicity',
        artist: "The Police",
        genre: 'New wave, Post-punk',
        year: 1983,
        albumLength: 44,
        tracks: 10,
        typeOfAlbum: 'Studio',
        songwriters: 'Sting, Andy Summers, Stewart Copeland',
        producers: 'Hugh Padgham, Steve Lillywhite',
      },
      {
        id: 10,
        title: 'Physical Graffiti',
        artist: "Led Zeppelin",
        genre: 'Blues rock, Hard rock',
        year: 1975,
        albumLength: 86,
        tracks: 15,
        typeOfAlbum: 'Compilation',
        songwriters: 'Jimmy Page, Robert Plant, John Paul Jones, John Bonham',
        producers: 'Jimmy Page, Robert Plant',
      },
    ]
}
