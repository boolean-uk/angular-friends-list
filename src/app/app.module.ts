import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { PeopleComponentComponent } from "./people.component/people.component.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, PeopleComponentComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
