import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {PlacePageComponent} from './pages/place-page/place-page.component';
import {PlaceListComponent} from './place-list/place-list.component';
import {AddPlaceComponent} from './pages/add-place-page/add-place.component';
import {HttpClientModule} from '@angular/common/http';
import { MainPageComponent } from './pages/main-page/main-page.component';
import {FilterPipe} from './pipes/filter.pipe';
import {PlaceService} from './services/place.service';
import {WeatherService} from './services/weather.service';

const appRoutes: Routes = [
  {path: 'list', component: MainPageComponent},
  {path: 'place/:id', component: PlacePageComponent},
  {path: 'add', component: AddPlaceComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'},
];

const COMPONENTS = [
  AppComponent,
  PlacePageComponent,
  PlaceListComponent,
  AddPlaceComponent,
  MainPageComponent,
];

const PIPES = [
  FilterPipe,
];

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PIPES
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PlaceService,
    WeatherService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
