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


  addToFavorites(people: string) {
    if(!this.favorites.includes(people)) {    
      this.favorites.push(people)
    }
  }

    removeFromFavorites(people: string) {
    this.favorites = this.favorites.filter((f) => f!== people)
  }

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  getAllFavorites() {
    let res = "";
    for(const favorite of this.favorites) {
      res += favorite + " "
    }
    return res
  }
}
