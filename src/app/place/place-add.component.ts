import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {PlaceService} from '../place.service';

@Component({
  selector: 'app-place-add',
  templateUrl: './place-add.component.html',
  styleUrls: ['./place-add.component.css']
})
export class PlaceAddComponent implements OnInit {
  townNameModel;

  constructor(private placeService: PlaceService) {
  }

  ngOnInit() {
  }

  addTown(placeForm: NgForm) {
    console.log(placeForm.value);
    this.placeService.addPlace(placeForm.value).subscribe((res) => {
      console.log(res);
    });
  }
}
