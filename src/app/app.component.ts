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

  makeFavorite(friend: string) {
    if (!this.favorites.includes(friend)) {
      this.favorites.push(friend);
    }
  }

  removeFavorite(friend: string) {
    this.favorites = this.favorites.filter((f) => f !== friend);
  }
}
