import {Component, Input, OnInit} from '@angular/core';
import {CoordInterface} from '../interfaces/coord.interface';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.sass']
})
export class MapComponent implements OnInit {
  @Input() public coord: CoordInterface;
  public lat;
  public lng;

  constructor() { }

  public ngOnInit() {
    this.setCoords();
  }

  public setCoords(): void {
    this.lat = this.coord.lat;
    this.lng = this.coord.lon;
  }
}
