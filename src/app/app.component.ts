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

  addToFavorites(person: string) {
    if (!this.favorites.includes(person)) {
      this.favorites.push(person);
    }
  }

  removeFromFavorites(person: string) {
    this.favorites = this.favorites.filter(p => p !== person);
  }

  isFavorite(person: string): boolean {
    return this.favorites.includes(person);
  }
}
