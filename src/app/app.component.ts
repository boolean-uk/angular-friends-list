import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // Variables
  newFriend: string | null = null;
  favorite: string[] = [];
  lastFavorite: boolean = false;

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  addFavorite(person: string) {
    if (this.favorite.includes(person)) {
      return;
    } else {
      this.favorite.push(person);
    }
  }

  removeFavorite(person: string) {
    this.favorite = this.favorite.filter(favoritePerson => favoritePerson !== person);
  }
  
}
