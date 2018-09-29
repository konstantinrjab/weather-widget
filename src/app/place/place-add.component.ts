import {Component, Input, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {PlaceService} from '../place.service';
import {HttpErrorResponse} from '@angular/common/http';
import {forEach} from '@angular/router/src/utils/collection';

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
    if (!this.error) {
      this.placeService.addTown(placeForm.value)
        .subscribe((res) => {
            console.log(res);
          },
          error => {
            this.handleError(error);
          },
        );
    } else {
      console.log('there was an error');
    }
  }

  handleError(error) {
    this.error = Object.values(error);
    console.log(this.error);
  }
}
