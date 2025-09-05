import { Component } from '@angular/core';
import { PeopleComponent } from './people/people.component';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];
  favorites: string[] = [];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  setFavorite(friend: string) {
    if (!this.favorites.includes(friend)) {
      this.favorites.push(friend);
      console.log('favorite:', this.favorites);
    }
  }

  removeFavorite(friend: string) {
    if (this.favorites.includes(friend)) {
      const index = this.favorites.indexOf(friend);
      this.favorites.splice(index, 1);
    }
  }
}
