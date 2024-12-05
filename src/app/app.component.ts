import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // like the jsx file in react
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorite: string | null = null;

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];
  favorites: string[] = [];

  onSetFavorite(name: string): void {
    this.favorite = name;
    this.favorites.push(name);
  }

  onRemoveFavorite(name: string): void {
    this.favorites = this.favorites.filter(function (item) {
      return item !== name;
    });
  }

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }
}
