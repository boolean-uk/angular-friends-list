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

  addFavorite(name: string) {
    this.favorites.push(name);
    console.log("favorites added: ", this.favorites);
  }

  removeFavorite(name: string) {
    const index = this.favorites.indexOf(name);
    this.favorites.splice(index, 1);
    console.log("favorites removed: ", this.favorites);
  }
}
