import {Component, OnInit} from '@angular/core';
import {PlaceService} from '../place.service';
import {ActivatedRoute} from '@angular/router';
import {Town} from '../models/town.model';
import {WeatherService} from '../weather.service';
import {Weather} from '../models/weather.model';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  town: Town;
  weather: Weather;
  error: Array<string>;

  constructor(
    private route: ActivatedRoute,
    private placeService: PlaceService,
    private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.getTown();
  }

  getTown(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.placeService.getTown(id)
      .subscribe(town => {
          this.town = town;
          this.getWeather();
        },
        error => {
          this.error = error;
          console.log(error);
        },
      );
  }

  getWeather(): void {
    this.weatherService.getWeather(this.town.name)
      .subscribe((weather: Weather) => this.weather = weather,
        error => this.error = error);
  }

  getIconClass() {
    const now = Date.now() / 1000;
    return 'owf-' + this.weather.weather[0].id
      + (now > +this.weather.sys.sunrise && now < +this.weather.sys.sunset ? '-d' : '-n');
  }

  getCardinal(angle) {
    const directions = 8;

    const degree = 360 / directions;
    angle = angle + degree / 2;

    if (angle >= 0 && angle < degree) {
      return 'N';
    }
    if (angle >= degree && angle < 2 * degree) {
      return 'NE';
    }
    if (angle >= 2 * degree && angle < 3 * degree) {
      return 'E';
    }
    if (angle >= 3 * degree && angle < 4 * degree) {
      return 'SE';
    }
    if (angle >= 4 * degree && angle < 5 * degree) {
      return 'S';
    }
    if (angle >= 5 * degree && angle < 6 * degree) {
      return 'SW';
    }
    if (angle >= 6 * degree && angle < 7 * degree) {
      return 'W';
    }
    if (angle >= 7 * degree && angle < 8 * degree) {
      return 'NW';
    }
    return 'N';
  }
}
