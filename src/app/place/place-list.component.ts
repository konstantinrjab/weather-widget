import {Component, Input, OnInit, Output} from '@angular/core';
import {TownModel} from '../models/town.model';
import {PlaceService} from '../services/place.service';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css'],
})
export class PlaceListComponent implements OnInit {
  @Input() town: TownModel;
  @Output() deleteEvent = new EventEmitter();

  constructor(private placeService: PlaceService) {
  }

  ngOnInit(): void {
  }

  delete(town: TownModel): void {
    this.placeService.deleteTown(town)
      .subscribe((res) => this.deleteEvent.emit());
  }
}
