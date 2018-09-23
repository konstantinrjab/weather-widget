import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {PlaceComponent} from './place/place.component';
import {PlaceListComponent} from './place/place-list.component';
import {PlaceSearchComponent} from './place/place-search.component';
import {PlaceAddComponent} from './place/place-add.component';

const appRoutes: Routes = [
  {path: 'list', component: PlaceListComponent},
  {path: 'place', component: PlaceComponent},
  {path: 'add', component: PlaceAddComponent},
  {path: '', redirectTo: 'list', pathMatch: 'full'},
];

@NgModule({
  declarations: [
    AppComponent,
    PlaceComponent,
    PlaceSearchComponent,
    PlaceListComponent,
    PlaceAddComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
