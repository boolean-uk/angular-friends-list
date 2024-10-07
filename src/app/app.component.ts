import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorite: string | null = null;

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];
  favourite: string[] = [];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  addToFavourites(name: string) {
    if (!this.favourite.includes(name)) {
      this.favourite.push(name);
    }
  }

  removeFavourites(name: string) {
    if (this.favourite.includes(name)) {
      const index = this.favourite.indexOf(name);
      this.favourite.splice(index)
    }
  }
}
