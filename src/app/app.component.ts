import { Component, Input } from '@angular/core';

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

  addToFavourites(friend: string) {
    if (this.favorites.includes(friend)) {
      return;
    }

    this.favorites.push(friend);
    console.log(this.favorites);
  }

  removeFromFavourites(friend: string) {
    if (!this.favorites.includes(friend)) {
      return;
    }

    this.favorites.splice(this.favorites.indexOf(friend), 1);
  }
}
