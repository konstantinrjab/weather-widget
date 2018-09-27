import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {PlaceService} from '../place.service';

@Component({
  selector: 'app-place-add',
  templateUrl: './place-add.component.html',
  styleUrls: ['./place-add.component.css']
})
export class PlaceAddComponent implements OnInit {
  protected townNameModel;
  error;

  constructor(private placeService: PlaceService) {
  }

  ngOnInit() {
  }

  addTown(placeForm: NgForm): void {
    console.log(placeForm.value);
    this.placeService.addTown(placeForm.value)
      .subscribe((res) => {
      console.log(res);
    }, error => this.handleError);
  }
  handleError(error) {
    console.log(error);
  }
}
