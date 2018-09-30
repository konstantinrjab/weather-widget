import {Pipe, PipeTransform} from '@angular/core';
import {Town} from './models/town.model';

@Pipe({
  name: 'searchTown'
})
export class FilterPipe implements PipeTransform {
  transform(towns: Town[], searchText: string): any[] {
    if (!towns || !searchText) {
      return [];
    }
    searchText = searchText.toString().toLowerCase();
    return towns.filter(function (town: Town) {
      return town.name.toLowerCase().includes(searchText);
    });
  }
}