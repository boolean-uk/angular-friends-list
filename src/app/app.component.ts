import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorites: String[] = [];

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  addFavorite(person: String) {
    if (!this.favorites.includes(person)) {
      this.favorites?.push(person)
    }
  }

  removeFavorite(person: String) {
    this.favorites = this.favorites.filter(favPerson => favPerson !== person)
  }
}
