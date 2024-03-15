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

  addFavorite(maiFavouwiteFwiend: string) {
    if(this.favorites.indexOf(maiFavouwiteFwiend) === -1) {
      this.favorites.push(maiFavouwiteFwiend);
    }
  }

  removeFavorite(noLongerMaiFavouwiteFwiend: string) {
    const index = this.favorites.indexOf(noLongerMaiFavouwiteFwiend)
    if (index !== -1) {
      this.favorites.splice(index, 1);
    }
  }
}