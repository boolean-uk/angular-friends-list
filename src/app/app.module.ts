import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app-component/app.component';
import { PeopleComponent } from './people-component/people.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FavoritePeopleComponent } from './favorite-people/favorite-people.component';
@NgModule({
  declarations: [AppComponent, PeopleComponent, FavoritePeopleComponent],
  imports: [BrowserModule, FormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
