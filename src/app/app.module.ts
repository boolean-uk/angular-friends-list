import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PeopleComponent } from './people/people.component';
import { FavoritePeopleComponent } from './favorite-people/favorite-people.component';

@NgModule({
  declarations: [AppComponent, PeopleComponent, FavoritePeopleComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
