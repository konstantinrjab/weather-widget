import {Component, Input, OnInit} from '@angular/core';
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
  error;

  constructor(
    private route: ActivatedRoute,
    private placeService: PlaceService,
    private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.getTown();
    // this.getWeather();
  }

  getTown(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.placeService.getTown(id)
      .subscribe(town => { this.town = town; this.getWeather(); },
        error => {this.error = error; console.log(error); },
         );
  }

  getWeather(): void {
    this.weatherService.getWeather(this.town.name)
      .subscribe((weather: Weather) => this.weather = weather,
        error => this.error = error);
  }
}
