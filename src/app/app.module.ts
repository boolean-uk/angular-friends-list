import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { CreatePersonComponent } from './create-person/create-person.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    FavoritesComponent,
    CreatePersonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
