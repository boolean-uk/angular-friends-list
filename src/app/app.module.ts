import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from 'src/people/people.component';
import { FavouritesComponent } from 'src/favourites/favourites.component';

@NgModule({
  declarations: [AppComponent,PeopleComponent, FavouritesComponent],
  imports: [BrowserModule, FormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
