import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorites: string[] = [];
  friends: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.friends.push(this.newFriend);
    this.newFriend = null;
  }

  addFavorites(person: string) {
    if (this.favorites.includes(person)) {
      return;
    }

    this.favorites.push(person)
  }

  removeFavorite(person: string) {
    if (!this.favorites.includes(person)) {
      return;
    }
    
    let index = this.favorites.indexOf(person);
    this.favorites.splice(index, 1)
  }
}
