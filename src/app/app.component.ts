import { Component } from '@angular/core';
import { PeopleComponent } from './people/people.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorites: string[] = [];
  addedAsFavorite: boolean = false;

  people: string[] = ['Lewis', 'Jules', 'Ed', 'Nathan', 'Dave', 'Nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  setFavoriteFriend(person:string) {
    this.favorites.push(person)
  }

  removeFavoriteFriend(person:string) {
    const index = this.favorites.indexOf(person);
    this.favorites.splice(index, 1)
  }

  getAllFavorites() {
    let allFavorites:string = ""
    for (let index = 0; index < this.favorites.length; index++) {
      if( index !== 0) {
        allFavorites += ", "
      }
      allFavorites += this.favorites[index];
    }
    return allFavorites
  }
}
