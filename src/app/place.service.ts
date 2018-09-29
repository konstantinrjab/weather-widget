import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Town} from './models/town.model';
import {Observable, of, throwError} from 'rxjs';
import {catchError, delay, retryWhen, take} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class PlaceService {
  url = 'http://laravel-crud-api/api/towns';

  constructor(private  http: HttpClient) {
  }

  getTown(id: number): Observable<Town> {
    const url = this.url + '/' + id;
    return this.http.get<Town>(url).pipe(
      catchError(this.handleError<Town>(`getTown id=${id}`))
    );
  }

  getTowns() {
    return this.http.get(this.url).pipe(
      retryWhen(errors => errors.pipe(delay(1000), take(5))),
      catchError(this.handleError<Town>(`getTowns`))
    );
  }

  addTown(town: Town): Observable<Town> {
    return this.http.post<Town>(this.url, town).pipe(
      catchError(this.handleError<Town>(`addTown`))
    );
  }

  deleteTown(town: Town): Observable<Town> {
    const url = this.url + '/' + town.id;
    return this.http.delete<Town>(url).pipe(
      catchError(this.handleError<Town>(`deleteTown`))
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
