import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TownModel} from '../models/town.model';
import {Observable, of, throwError} from 'rxjs';
import {catchError, delay, retryWhen, take} from 'rxjs/operators';

@Injectable()
export class PlaceService {
  // 104.248.34.172/
  url = 'http://laravel-crud-api/api/towns'; // todo env

  constructor(private  http: HttpClient) {
  }

  getTown(id: number): Observable<TownModel> {
    const url = this.url + '/' + id;
    return this.http.get<TownModel>(url).pipe( // todo use interceptor
      catchError(this.handleError<TownModel>(`getTown id=${id}`))
    );
  }

  getTowns() {
    return this.http.get(this.url).pipe(
      retryWhen(errors => errors.pipe(delay(1000), take(5))),
      catchError(this.handleError<TownModel>(`getTowns`))
    );
  }

  addTown(town: TownModel): Observable<TownModel> {
    return this.http.post<TownModel>(this.url, town).pipe(
      catchError(this.handleError<TownModel>(`addTown`))
    );
  }

  deleteTown(town: TownModel): Observable<TownModel> {
    const url = this.url + '/' + town.id;
    return this.http.delete<TownModel>(url).pipe(
      catchError(this.handleError<TownModel>(`deleteTown`))
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
