import {CoordInterface} from './coord.interface';
import {WeatherEntityInterface} from './weatherEntity.interface';
import {MainInterface} from './main.interface';
import {WindInterface} from './wind.interface';
import {CloudsInterface} from './clouds.interface';
import {SysInterface} from './sys.interface';
import {CardinalEnum} from '../enums/cardinal.enum';

export class WeatherInterface {
  public coord: CoordInterface;
  public weather?: (WeatherEntityInterface)[] | null;
  public base: string;
  public main: MainInterface;
  public wind: WindInterface;
  public clouds: CloudsInterface;
  public dt: number;
  public sys: SysInterface;
  public id: number;
  public name: string;
  public cod: number;
}
