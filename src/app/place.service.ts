import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Town} from './models/town.model';
import { HttpHeaders } from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

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

  getTown(id: number): Observable<Town> {
    const url = `${this.API_URL}/towns/${id}`;
    return this.http.get<Town>(url).pipe(
        catchError(this.handleError<Town>(`getHero id=${id}`))
    );
  }
  getTowns() {
    return this.http.get(`${this.API_URL}/towns`);
  }

  addTown(town: Town): Observable<Object> {
    return this.http.post(`${this.API_URL}/towns`, town);
  }
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
