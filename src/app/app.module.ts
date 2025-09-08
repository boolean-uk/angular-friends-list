import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PeopleComponentComponent} from './people-component/people-component.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, PeopleComponentComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
