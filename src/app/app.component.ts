import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorites: string[] = [];

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  setFavorite(person: string) {
    if (!this.favorites.includes(person)) {
      this.favorites.push(person);
      console.log(this.favorites);
    }
  }

  removeFavorite(favorite: string) {
    if (this.favorites.includes(favorite)) {
      for (let i = 0; i < this.favorites.length; i++) {

        if (this.favorites[i] === favorite) {
          let spliced = this.favorites.splice(i, 1);
        }
      }

    }
  }
  
}
