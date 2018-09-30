import {Component, Input, OnInit} from '@angular/core';
import {Subject} from 'rxjs';
import 'babel-polyfill';

@Component({
  selector: 'app-place-search',
  templateUrl: './place-search.component.html',
  styleUrls: ['./place-search.component.css'],
})
export class PlaceSearchComponent implements OnInit {
  @Input() towns: string;
  searchText;
  constructor() {
  }

  ngOnInit(): void {
  }

  search(name: string) {
    console.log(name);
    this.searchText.next(name);
  }
}
