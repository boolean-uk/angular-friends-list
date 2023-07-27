import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorites: string[] = [];

  people: string[] = ['Lewis', 'Jules', 'Ed', 'Nathan', 'Dave', 'Nigel'];

  addFriend() {
    if (!this.newFriend) return;
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  onMarkAsFavorite(name: string) {
    const index = this.favorites.indexOf(name);

    if (index !== -1) {
      this.favorites.splice(index, 1);
      return;
    }

    this.favorites.push(name);
  }

  getFavorites() {
    return this.favorites.join(", ")
  }
}