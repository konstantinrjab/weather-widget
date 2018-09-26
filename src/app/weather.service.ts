import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {Weather, Coord} from './models/weather.model';

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
      catchError(this.handleError(`getWeather name=${name}`))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
