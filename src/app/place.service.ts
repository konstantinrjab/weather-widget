import {Injectable} from '@angular/core';
import { Observable, of } from 'rxjs';
import {TOWNS} from './town-mock';
import {Town} from './models/town.model';

@Injectable({
    providedIn: 'root'
})
export class PlaceService {

    constructor() {
    }

    getPlaces(): Observable<Town[]> {
        return of(TOWNS);
    }
}
