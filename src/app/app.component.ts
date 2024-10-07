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

  addFavorite(name:string) {
    if (!name) {
      return;
    }

    if (this.favorites.includes(name)) {
      return;
    }

    this.favorites.push(name)
  }

  removeFavorite(name:string) {
    if (!name) {
      return;
    }

    if (!this.favorites.includes(name)) {
      return;
    }
    this.favorites.splice(this.favorites.indexOf(name), 1)
  }

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }
}
