import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {TownInterface} from '../interfaces/town.interface';
import {Observable, of, throwError} from 'rxjs';
import {catchError, delay, retryWhen, take} from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable()
export class PlaceService {

  constructor(private  http: HttpClient) {
  }

  public getTown(id: number): Observable<TownInterface> {
    const url = environment.placeApiUrl + '/' + id;
    return this.http.get<TownInterface>(url).pipe( // todo use interceptor
      catchError(this.handleError<TownInterface>(`getTown id=${id}`))
    );
  }

  public getTowns() {
    return this.http.get(environment.placeApiUrl).pipe(
      retryWhen(errors => errors.pipe(delay(1000), take(5))),
      catchError(this.handleError<TownInterface>(`getTowns`))
    );
  }

  public addTown(town: TownInterface): Observable<TownInterface> {
    return this.http.post<TownInterface>(environment.placeApiUrl, town).pipe(
      catchError(this.handleError<TownInterface>(`addTown`))
    );
  }

  public deleteTown(town: TownInterface): Observable<TownInterface> {
    const url = environment.placeApiUrl + '/' + town.id;
    return this.http.delete<TownInterface>(url).pipe(
      catchError(this.handleError<TownInterface>(`deleteTown`))
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
