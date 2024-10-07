import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favourites: string[] = [];

  isFavourite: boolean = false;


  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFavourite(person: string) {
    console.log(person);
      this.favourites.push(person);
      console.log(this.favourites);
    }

  removeFavourite(person: string) {
    this.favourites = this.favourites.filter((f) => f !== person);
  }

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }
}
