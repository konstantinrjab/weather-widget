import {CoordInterface} from './coord.interface';
import {WeatherEntityInterface} from './weatherEntity.interface';
import {MainInterface} from './main.interface';
import {WindInterface} from './wind.interface';
import {CloudsInterface} from './clouds.interface';
import {SysInterface} from './sys.interface';

export interface WeatherInterface {
  coord: CoordInterface;
  weather?: (WeatherEntityInterface)[] | null;
  base: string;
  main: MainInterface;
  wind: WindInterface;
  clouds: CloudsInterface;
  dt: number;
  sys: SysInterface;
  id: number;
  name: string;
  cod: number;
}
