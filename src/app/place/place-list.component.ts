import { Component, OnInit } from '@angular/core';
import {TOWNS} from '../town-mock';
import {PlaceService} from '../place.service';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {
  places = TOWNS;

  constructor() { }

  ngOnInit() {
    // this.getTowns();
  }
  // getTowns() {
  //   this.PlaceService.getPlaces()
  //       .subscribe(places => this.places = places);
  // }
}
