import {Component, Input, OnInit, Output} from '@angular/core';
import {TownInterface} from '../interfaces/town.interface';
import {PlaceService} from '../services/place.service';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css'],
})
export class PlaceListComponent implements OnInit {
  @Input() public town: TownInterface;
  @Output() public deleteEvent = new EventEmitter();

  constructor(private placeService: PlaceService) {
  }

  public ngOnInit(): void {
  }

  public delete(town: TownInterface): void {
    this.placeService.deleteTown(town)
      .subscribe((res) => this.deleteEvent.emit());
  }
}
