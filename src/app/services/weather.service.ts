import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError, retry, tap} from 'rxjs/operators';
import {WeatherInterface} from '../interfaces/weather.interface';
import {environment} from '../../environments/environment';

@Injectable()
export class WeatherService {


  constructor(private http: HttpClient) {
  }

  public getWeather(name: string): Observable<WeatherInterface> {
    const url = `${environment.API_URL}&q=${name}&appid=${environment.token}`;
    return this.http.get<WeatherInterface>(url).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `error ${error.error.message}, ` +
        `body was: ${Object.values(error.error)}`);
      if (error.status === 404) {
        return throwError('City not found');
      }
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened, please try again later.');
  }
}
