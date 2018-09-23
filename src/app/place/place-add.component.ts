import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-place-add',
  templateUrl: './place-add.component.html',
  styleUrls: ['./place-add.component.css']
})
export class PlaceAddComponent implements OnInit {
  townNameModel;
  constructor() { }

  ngOnInit() {
  }
  saveTown(placeForm: NgForm): void {
    console.log(placeForm.value);
  }
}
