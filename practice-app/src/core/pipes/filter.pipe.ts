import { Pipe, PipeTransform } from '@angular/core';
import { Album } from '../../app/models/albums.model';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(value: Album[], searchValue: string): Album[] {
    if (!searchValue) return value;

    const filteredALbums = value.filter((album) =>
      album.title.toLowerCase().includes(searchValue.toLowerCase().trim())
    );

    return filteredALbums;
  }
}
