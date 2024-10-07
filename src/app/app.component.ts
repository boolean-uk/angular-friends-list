import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];
  favourite: string[] = [];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  addToFavourite(peopleName: string) {
    if (!this.favourite.includes(peopleName)) {
      this.favourite.push(peopleName);
    }
  }

  removeFromFavourite(peopleName: string) {
    this.favourite.splice(
      this.favourite.findIndex((p) => p === peopleName),
      1
    );
  }
}
