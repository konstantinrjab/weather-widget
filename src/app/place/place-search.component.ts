import { Component, OnInit } from '@angular/core';
import { TOWNS } from '../town-mock';
import {Town} from '../models/town.model';

@Component({
  selector: 'app-place-search',
  templateUrl: './place-search.component.html',
  styleUrls: ['./place-search.component.css']
})
export class PlaceSearchComponent implements OnInit {
  towns: Town[] = [
    {
      name: 'London',
    },
    {
      name: 'Lara',
    },
    {
      name: 'Col'
    }
  ];
  constructor() { }

  ngOnInit() {
  }
}
