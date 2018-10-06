import {Component, OnInit} from '@angular/core';
import {PlaceService} from '../../services/place.service';
import {ActivatedRoute} from '@angular/router';
import {TownModel} from '../../models/town.model';
import {WeatherService} from '../../services/weather.service';
import {WeatherInterface} from '../../interfaces/weather.interface';
import {CardinalEnum} from '../../enums/cardinal.enum';

@Component({
  selector: 'app-place-page',
  templateUrl: './place-page.component.html',
  styleUrls: ['./place-page.component.sass']
})
export class PlacePageComponent implements OnInit {
  public town: TownModel;
  public weather: WeatherInterface;
  public error: Array<string>;

  public constructor(
    private route: ActivatedRoute,
    private placeService: PlaceService,
    private weatherService: WeatherService) {
  }

  public ngOnInit(): void {
    this.getTown();
  }

  public getIconClass(): string {
    const now = Date.now() / 1000;
    return 'owf-' + this.weather.weather[0].id
      + (now > +this.weather.sys.sunrise && now < +this.weather.sys.sunset ? '-d' : '-n');
  }

  // todo make it cardinal type only
  // todo make it cardinal enum only
  public getCardinal(angle): any {
    const directions = 8;

    const degree = 360 / directions;
    angle = angle + degree / 2;

    if (angle >= 0 && angle < degree) {
      return CardinalEnum.north;
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

  private getTown(): void {
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

  private getWeather(): void {
    this.weatherService.getWeather(this.town.name)
      .subscribe((weather: WeatherInterface) => this.weather = weather,
        error => this.error = error);
  }
}
