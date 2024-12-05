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
    this.newFriend = '';
  }

  setFavorite(person: string) {
    console.log(person);
    const index = this.favorites.indexOf(person);
    if (index === -1) {
      this.favorites.push(person);
    } else {
      this.favorites.splice(index, 1);
    }
    console.log(this.favorites);
  }

  removeFavorite(person: string) {
    const index = this.favorites.indexOf(person);
    if (index !== -1) {
      this.favorites.splice(index, 1);
    }
    console.log(this.favorites);
  }
}
