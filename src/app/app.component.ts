import { Component } from '@angular/core';
import { PeopleComponent } from './people/people.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;

  favorites: string[] | null = [];
  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  selectFavorites(n: string) {
    if (!this.favorites?.includes(n)) {
      this.favorites?.push(n)
    }
  }

  appendFriend(n: string) {
    this.people.push(n)
  }

  removeFriend(n: string) {
    if (this.favorites !== null) {
      this.favorites.splice(this.favorites.indexOf(n), 1)
    }
  }

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }
}
