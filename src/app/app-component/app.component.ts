import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorite: string[] = [];

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      this.newFriend = null;
      return;
    }
    if (this.people.indexOf(this.newFriend) !== -1) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  setFavorite(person: string) {
    if (this.favorite.indexOf(person) !== -1) {
      return;
    }
    this.favorite.push(person);
  }

  removeFavorite(person: string) {
    let index = this.favorite.indexOf(person);
    this.favorite.splice(index, 1);
  }
}
