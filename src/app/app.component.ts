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

  setFavourite(person: string) {
    this.favorite = person;
    if (!this.favourites.includes(person)) {
      this.favourites.push(person)
    }
  }

  remove(person:string) {
    this.favourites = this.favourites.filter(p => p!== person)
  }

}
