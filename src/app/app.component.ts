import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favoriteFriends: string[] = [];

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  selectFavorite(person: string) {
    if (!this.favoriteFriends.includes(person)) {
      this.favoriteFriends.push(person);
    }
  }

  removeFavorite(person: string) {
    this.favoriteFriends = this.favoriteFriends.filter(fav => fav !== person);
  }

  isFavorite(person: string): boolean {
    return this.favoriteFriends.includes(person);
  }
}
