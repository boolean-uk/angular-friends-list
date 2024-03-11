import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorite: string[] = [];

  people: string[] = ['Lewis', 'Jules', 'Ed', 'Nathan', 'Dave', 'Nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  setFavorite(person: string) {
    if (this.favorite?.includes(person)) {
      return;
    } else {
      this.favorite?.push(person);
    }
  }
  removeFavorite(person: string) {
    const index = this.favorite.indexOf(person);
    if (index !== -1) {
      this.favorite.splice(index, 1);
    }
  }
}
