import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PeopleComponent } from './people/people.component';
import { FavPersonComponent } from './fav-person/favPerson.component';

@NgModule({
  declarations: [AppComponent, PeopleComponent, FavPersonComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
