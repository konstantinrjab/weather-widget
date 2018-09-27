import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError, retry, tap} from 'rxjs/operators';
import {Weather} from './models/weather.model';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {
  API_URL = 'http://api.openweathermap.org/data/2.5/weather?';
  token = '7a561e0fd6fb127d60e075752fe8d983';

  constructor(private  http: HttpClient) {
  }

  getWeather(name: string): Observable<Weather> {
    const url = `${this.API_URL}&q=${name}&appid=${this.token}`;
    return this.http.get<Weather>(url).pipe(
      retry(3),
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
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };
}
