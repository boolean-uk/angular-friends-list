import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorites: string[] = [];

  people: string[] = ['eyvind', 'espen', 'daniel', 'silje', 'øyvind', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  addFavorite(p: string) {
    this.favorites.push(p);
  }

  unFavorite(p: string) {
    let i = this.favorites.indexOf(p)
    if (i >= 0) this.favorites.splice(i, 1);
  }
}
