import {Pipe, PipeTransform} from '@angular/core';
import {TownInterface} from '../interfaces/town.interface';

@Pipe({
  name: 'searchTown'
})
export class FilterPipe implements PipeTransform {
  public transform(towns: TownInterface[], searchText: string): TownInterface[] {
    if (!towns) {
      return [];
    }
    if (!searchText) {
      return towns;
    }
    searchText = searchText.toString().toLowerCase();
    return towns.filter(function (town: TownInterface) {
      return town.name.toLowerCase().includes(searchText);
    });
  }
}
