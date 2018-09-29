import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Town} from './models/town.model';
import {HttpHeaders} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError, delay, retryWhen, take} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
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
      catchError(this.handleError<Town>(`getTown id=${id}`))
    );
  }

  getTowns() {
    return this.http.get(`${this.API_URL}/towns`).pipe(
      retryWhen(errors => errors.pipe(delay(1000), take(5))),
      catchError(this.handleError<Town>(`getTowns`))
    );
  }

  addTown(town: Town): Observable<Town> {
    const url = `${this.API_URL}/towns`;
    return this.http.post<Town>(url, town).pipe(
      catchError(this.handleError<Town>(`addTown`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      if (error.status === 400) {
        return throwError(error.error);
      }
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
