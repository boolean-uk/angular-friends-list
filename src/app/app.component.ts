import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorites: Set<string> = new Set(); // Changed to handle multiple favorites
  people: string[] = ['Lewis', 'Jules', 'Ed', 'Nathan', 'Dave', 'Nigel'];

  addFriend() {
    if (this.newFriend) {
      this.people.push(this.newFriend);
      this.newFriend = null;
    }
  }

  toggleFavorite(person: string) {
    if (this.favorites.has(person)) {
      this.favorites.delete(person);
    } else {
      this.favorites.add(person);
    }
  }
}
