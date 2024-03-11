import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favourites: string[] = [];
  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  addFavourite(person: string) {
    this.favourites.push(person);
  }

  removeFavourite(person: string) {
    this.favourites = this.favourites.filter((favourite) => favourite !== person);
  }

  handleFavouriteButtonClick(event: { person: string }) {
    if (this.favourites.includes(event.person)) {
      this.removeFavourite(event.person);
    } else {
      this.addFavourite(event.person);
    }
  }
}
