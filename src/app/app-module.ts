import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { People } from './people/people';
import {FriendsComponent} from './friends/friends.component'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    App,
    People,
    FriendsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  bootstrap: [App]
})
export class AppModule { }
