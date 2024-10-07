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
  favourites: string[] = [];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  removeFriend(name: string) {
    if (this.people.includes(name)) {
      this.people.splice(this.people.indexOf(name), 1);

      if (this.favourites.includes(name)) {
        this.removeFavourite(name)
      }
    }
  }

  addFavourite(name: string) {
    if (!this.favourites.includes(name)) {
      this.favourites.push(name)
    }

    return;
  }

  removeFavourite(name: string) {
    if (this.favourites.includes(name)) {
      this.favourites.splice(this.favourites.indexOf(name), 1);
    }

    return;
  }

}
