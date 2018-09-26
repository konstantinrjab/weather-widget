import {Component, Input, OnInit} from '@angular/core';
import {PlaceService} from '../place.service';
import {ActivatedRoute} from '@angular/router';
import {Town} from '../models/town.model';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  @Input() town: Town;
  constructor(
      private route: ActivatedRoute,
      private placeService: PlaceService) { }

  ngOnInit() {
    this.getTown();
  }
  getTown(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.placeService.getTown(id)
        .subscribe(town => this.town = town);
  }
}
