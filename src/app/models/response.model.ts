import {Weather} from './weather.model';

export class Response {
    coord: {
        lon: number
        lat: number
    };
    weather: Weather[];
}
