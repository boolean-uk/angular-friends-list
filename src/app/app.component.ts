import { Component } from '@angular/core';
import { FriendComponent } from './friend/friend.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorite: string | null = null;
  favorites: string[] = [];

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  setFavorite(friend: string) {
    this.favorite = friend;
    this.favorite.includes(friend);
    if (!this.favorites.includes(friend)) {
      this.favorites.push(friend);
    }
  }

  deleteFriend(friend: string) {
    //remove friend from array
    this.people = this.people.filter((p) => p !== friend);
    //remove from favorites list
    if (this.favorites.includes(friend)) {
      this.favorites = this.favorites.filter((p) => p !== friend);
    }
  }
}
