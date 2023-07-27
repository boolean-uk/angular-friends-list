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
    if (!this.people.find((name) => name === this.newFriend)) {
      this.people.push(this.newFriend);
    }
    this.newFriend = null;
  }

  selectFavorite(name: string) {
    if (!this.favorites.includes(name)) {
      this.favorites.push(name);
    }
  }

  removeFavorite(person: string) {
    this.favorites = this.favorites.filter((item: string) => item !== person);
    console.log(this.favorites);
  }
}
