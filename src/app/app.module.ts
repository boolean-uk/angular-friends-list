import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FavoriteFriendComponent } from './favorite-friend/favorite-friend.component';
import { FriendItemComponent } from './friend-item/friend-item.component';

@NgModule({
  declarations: [AppComponent, FavoriteFriendComponent, FriendItemComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
