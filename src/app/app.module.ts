import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FriendlistComponent } from './friendlist/friendlist.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, FriendlistComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
