import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favourites: string[] = [];
  isFavourite: boolean = false
  people: string[] = ['Lewis', 'Jules', 'Ed', 'Nathan', 'Dave', 'Nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  addFavourite(person: string) {
    this.favourites.push(person)
  }

  removeFavourite(person: string){
    this.favourites = this.favourites.filter((fav) => fav !== person)
  }
}
