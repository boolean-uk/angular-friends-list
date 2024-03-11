import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorites: string[] = [];

  people: string[] = ['lewis', 'jules', 'edvart', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }
  setFavorite(person: string) {
    if (!this.favorites.includes(person)) {
      this.favorites.push(person);
    }
  }
  removeFavorite(person: string) {
    // Remove the person from the favorites array
    const index = this.favorites.indexOf(person);
    if (index !== -1) {
      this.favorites.splice(index, 1);
    }
  }
}
