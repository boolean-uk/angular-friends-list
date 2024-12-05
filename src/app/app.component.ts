import { Component } from '@angular/core';
import { PEOPLE } from './people';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorites: string[] = [];
  people: string[] = PEOPLE;

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  addFavorite(favorite: string) {
    if (this.favorites?.includes(favorite)) {
      return;
    }
    this.favorites.push(favorite);
  }

  removeFriend(exFriend: string) {
    this.people = this.people.filter(person =>
      person !== exFriend);
  }

  unfavorite(exFavorite: string) {
    this.favorites = this.favorites.filter(favorite =>
      favorite !== exFavorite);
  }
}
