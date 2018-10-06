import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {PlaceService} from '../services/place.service';
import {WeatherService} from '../services/weather.service';

@Component({
  selector: 'app-place-add',
  templateUrl: './place-add.component.html',
  styleUrls: ['./place-add.component.css']
})
export class PlaceAddComponent implements OnInit {
  protected townNameModel;
  error: Array<string>;
  success: string;

  constructor(private placeService: PlaceService,
              private weatherService: WeatherService) {
  }

  ngOnInit() {
  }

  addTown(placeForm: NgForm): void {
    if (!this.error) {
      this.weatherService.getWeather(this.townNameModel)
        .subscribe((res) => {
            this.placeService.addTown(placeForm.value)
              .subscribe((res2) => {
                this.success = 'Successfully added!';
                }, error => {
                  this.handleError(error);
                },
              );
          },
          error => {
            this.handleError(error);
          },
        );
    } else {
      console.error('there was an error');
    }
  }

  handleError(error): void {
    if (typeof error === 'object') {
      error = Object.values(error);
    }
    this.error = error;
  }
}
