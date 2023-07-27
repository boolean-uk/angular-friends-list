import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  newFriend: string | null = null;
  favorite: string | null = null;
  favorites: string[] = []
  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      console.log(this.newFriend)
      return;
    }
    console.log(this.newFriend)
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  OnsetFavorite(person: string) {
    this.favorites.push(person)
  }

  removeFavorite(favorite: string) {
    this.favorites = this.favorites.filter(person => person != favorite)
    }

}
