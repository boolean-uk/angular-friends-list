import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorites: Set<string> = new Set<string>()

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  addFavourite(person: string) {
    this.favorites.add(person);
  }

  getFavoritesAsArray(): string[] {
    return Array.from(this.favorites)
  }

  removeFavourite(person: string) {
    this.favorites.delete(person);
  }
}
