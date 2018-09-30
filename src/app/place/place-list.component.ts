import {Component, Input, OnInit, Output} from '@angular/core';
import {Town} from '../models/town.model';
import {PlaceService} from '../place.service';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css'],
})
export class PlaceListComponent implements OnInit {
  @Input() town: Town;
  @Output() deleteEvent = new EventEmitter();

  constructor(private placeService: PlaceService) {
  }

  ngOnInit(): void {
  }

  delete(town: Town): void {
    this.placeService.deleteTown(town)
      .subscribe((res) => this.deleteEvent.emit());
  }
}
