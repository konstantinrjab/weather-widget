import {Weather} from './weather';

export class Place {
    coord: {
        lon: number
        lat: number
    };
    weather: Weather[];
}
