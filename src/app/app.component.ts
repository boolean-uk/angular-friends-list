import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorites: string[] = [];

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  addFavorite(favorite: string) {
    if (!this.favorites.includes(favorite)) {
      this.favorites.push(favorite);
    }
  }

  removeFavorite(favorite: string) {
    this.favorites.splice(
      this.favorites.findIndex((fav) => fav === favorite),
      1
    );
  }
}
