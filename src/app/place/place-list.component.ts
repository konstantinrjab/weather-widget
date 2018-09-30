import {Component, OnInit} from '@angular/core';
import {PlaceService} from '../place.service';
import {Town} from '../models/town.model';
import 'babel-polyfill';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css'],
})
export class PlaceListComponent implements OnInit {
  protected towns;

  constructor(private placeService: PlaceService) {
  }

  ngOnInit(): void {
    this.getTowns();
  }

  getTowns(): void {
    this.placeService.getTowns()
      .subscribe((data: Town[]) => {
        this.towns = data;
      });
  }

  delete(town): void {
    this.placeService.deleteTown(town)
      .subscribe((res) => this.getTowns());
  }
}
