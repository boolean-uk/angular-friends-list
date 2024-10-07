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
  favourites: string[] = [];

  addFriend() {
    if (!this.newFriend) {
      return;
    }

    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  addFavorite(name: string) {
    this.favorite = name;
    if (!this.favourites.includes(name)) {
      this.favourites.push(name);
    }
  }

  removeFavorite(name: string) {
    this.favourites = this.favourites.filter(f => f !== name);
  }
}
