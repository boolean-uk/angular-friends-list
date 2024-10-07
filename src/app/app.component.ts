import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorites: string[] = []

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];
  // favorites: string[] = []; // empty
  addToFavorite(friend: string) {
    console.log("adding to fav: ", friend);
    if (!this.favorites.includes(friend)) {
      this.favorites = [...this.favorites, friend]; // create a new array
    }
    console.log(this.favorites);
  }
  
  removeFromFavorite(friend: string) {
    console.log("removing fav: ", friend);
    const index = this.favorites.indexOf(friend);
    if (index > -1) {
      this.favorites = [
        ...this.favorites.slice(0, index),
        ...this.favorites.slice(index + 1),
      ]; // create a new array
    }
  }

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }
}
