import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ListPeopleComponent } from './list-people/list-people.component';
import { ListFavsComponent } from './list-favs/list-favs.component';

@NgModule({
  declarations: [AppComponent, ListPeopleComponent, ListFavsComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
