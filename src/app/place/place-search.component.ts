import {Component, OnInit} from '@angular/core';
import {PlaceService} from '../services/place.service';
import {TownModel} from '../models/town.model';

@Component({
  selector: 'app-place-search',
  templateUrl: './place-search.component.html',
  styleUrls: ['./place-search.component.css'],
})
export class PlaceSearchComponent implements OnInit {
  searchText;
  protected towns;

  constructor(private placeService: PlaceService) {
  }

  ngOnInit(): void {
    this.getTowns();
  }

  protected getTowns(): void {
    this.placeService.getTowns()
      .subscribe((data: TownModel[]) => {
        this.towns = data;
      });
  }
}
