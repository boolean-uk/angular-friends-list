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
  favorites: string[] = [];

  addToFavorite(person: string) {
    this.favorite = person;
    if (!this.favorites.includes(this.favorite)) {
      this.favorites.push(this.favorite)
    }
  }

  removeFromFavorite(person: string) {
    this.favorites = this.favorites.filter(p => p !== person);
  }

  addFriend() {
    if (this.newFriend) {
      this.people.push(this.newFriend);
      this.newFriend = null;
    }
  }
}
