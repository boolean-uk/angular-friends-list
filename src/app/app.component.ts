import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorite: string[] = [];

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  addFriendToFavorite(friend : string) {
    if (!this.favorite.includes(friend)) {
      this.favorite.push(friend)
    }
  }

  removeFriendFromFavorite(frind : string) {
    if (this.favorite.includes(frind)) {
      this.favorite.splice(this.favorite.indexOf(frind), 1)
    }
  }
}
