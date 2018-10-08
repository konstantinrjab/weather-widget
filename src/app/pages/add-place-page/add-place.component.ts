import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {PlaceService} from '../../services/place.service';
import {WeatherService} from '../../services/weather.service';

@Component({
  selector: 'app-place-add',
  templateUrl: './add-place.component.html',
  styleUrls: ['./add-place.component.sass']
})
export class AddPlaceComponent implements OnInit {
  protected townNameModel;
  public error: Array<string>;
  public success: string;

  constructor(private placeService: PlaceService,
              private weatherService: WeatherService) {
  }

  public ngOnInit() {
  }

  public addTown(placeForm: NgForm): void {
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

  private handleError(error): void {
    if (typeof error === 'object') {
      error = Object.values(error);
    }
    this.error = error;
  }
}
