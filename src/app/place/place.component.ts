import { Component, OnInit } from '@angular/core';
import {PLACES} from '../place-mock';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  places = PLACES;

  constructor() { }

  ngOnInit() {
  }

}
