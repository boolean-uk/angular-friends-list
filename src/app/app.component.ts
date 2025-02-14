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
  addFavourite(name: string) {
    if (!this.favourites.includes(name)) {
      this.favourites.push(name);
    }  
  }
  removeFavourite(name: string) {
    this.favourites = this.favourites.filter(item => item != name);
  }
}
