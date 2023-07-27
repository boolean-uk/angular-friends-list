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
    console.log(this.people);
    console.log(this.newFriend);
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
    console.log(this.people);
  }

  addToFavourite(person: string) {
    if (!this.favoriteFriends.includes(person))
      this.favoriteFriends.push(person);
  }

  removeFromFavourites(person: string) {
    const index = this.favoriteFriends.indexOf(person);
    if (index !== -1) {
      this.favoriteFriends.splice(index, 1);
    }
  }
}
