import { Component } from '@angular/core';
import { PeopleComponent } from './people/people.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorite: string | null = null;
  remove: string | null = null;

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];
  favorites: string[] = []

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  addFavourite(person: string) {
    if (!this.favorites.includes(person)) {
      this.favorites = [...this.favorites, person]
    }
  }

  removeFavourite(person: string) {
    if (this.favorites.includes(person)) {
      this.favorites = this.favorites.filter(p => p !== person)
    }
  }
}
