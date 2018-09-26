import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Town} from './models/town.model';
import { HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
providedIn: 'root'
})

export class PlaceService {
  API_URL = 'http://laravel-generator/public/api';

  constructor(private  http: HttpClient) {
  }

  getPlaces() {
    return this.http.get(`${this.API_URL}/towns`);
  }

  addPlace(town): Observable<Object> {
    return this.http.post(`${this.API_URL}/towns`, town);
  }
}
