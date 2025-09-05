import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorite: string | null = null;

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];
  favs: string[] = [];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  removeAsFavourite(fav: string) {
    this.favs = this.favs.filter((f) => f !== fav);
  }

  setAsFavourite(person: string) {
    this.favorite = person;
  }

  addToFavourites(person: string) {
    if (this.favs.indexOf(person) === -1) {
      this.favs.push(person);
    }
  }
}
