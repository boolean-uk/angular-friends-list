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
  setFavorite(friend: string) {
    console.log('adding to fav: ', friend);
    if (!this.favorites.includes(friend)) {
      this.favorites = [...this.favorites, friend]; // create a new array
    }
    console.log(this.favorites);
  }

  removeFav(friend: string) {
    if (this.favorites.includes(friend)) {
      this.favorites = this.favorites.filter((favorite) => favorite !== friend);
    }
  }
}
