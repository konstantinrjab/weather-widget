import {Component, OnInit} from '@angular/core';
import {PlaceService} from '../../services/place.service';
import {TownInterface} from '../../interfaces/town.interface';

@Component({
  selector: 'app-place-search',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.sass'],
})
export class MainPageComponent implements OnInit {
  public searchText;
  protected towns;

  constructor(private placeService: PlaceService) {
  }

  public ngOnInit(): void {
    this.getTowns();
  }

  protected getTowns(): void {
    this.placeService.getTowns()
      .subscribe((data: TownInterface[]) => {
        this.towns = data;
      });
  }
}
