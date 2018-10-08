import {Pipe, PipeTransform} from '@angular/core';
import {TownModel} from '../models/town.model';

@Pipe({
  name: 'searchTown'
})
export class FilterPipe implements PipeTransform {
  transform(towns: TownModel[], searchText: string): any[] {
    if (!towns) return [];
    if (!searchText) return towns;
    searchText = searchText.toString().toLowerCase();
    return towns.filter(function (town: TownModel) {
      return town.name.toLowerCase().includes(searchText);
    });
  }
}
