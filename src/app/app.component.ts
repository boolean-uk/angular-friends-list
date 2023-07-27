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

  favouriteChecked(person: string) {
    this.favorites.push(person);
  }

  favouriteRemoved(person: string) {
    if(!this.favorites.includes(person)) return;
    this.favorites.splice(this.favorites.indexOf(person), 1);
  }
}
