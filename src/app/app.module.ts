import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people/people.component';

@NgModule({
  declarations: [AppComponent, PeopleComponent],
  imports: [BrowserModule, FormsModule, CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
