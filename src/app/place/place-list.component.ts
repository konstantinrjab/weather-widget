import {Component, OnInit} from '@angular/core';
import {PlaceService} from '../place.service';
import {Town} from '../models/town.model';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {
  protected places;

  constructor(private placeService: PlaceService) {
  }

  ngOnInit() {
    this.getTowns();
  }

  getTowns() {
    this.placeService.getTowns()
      .subscribe((data: Town[]) => {
        this.places = data;
      });
  }
}
