import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorite: string | null = null;

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];
  favorites: string[] = [];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }
  setFavorite(friend: string) {
    this.favorite = friend;
    if (!this.favorites.includes(this.favorite)) {
      this.favorites.push(this.favorite);
      this.favorite = null;
    }
  }

  removeFavorite(favorite: string) {
    this.favorites = this.favorites.filter((f) => f !== favorite);
  }
}
