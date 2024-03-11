import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorite: string | null = null;
  favorites: string[] = [];

  people: Friend[] = [
    { name: 'Lewis', isFavorite: false },
    { name: 'Jules', isFavorite: false },
    { name: 'Ed', isFavorite: false },
    { name: 'Nathan', isFavorite: false },
    { name: 'Dave', isFavorite: false },
    { name: 'Nigel', isFavorite: false }];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push({ name: this.newFriend, isFavorite: false });
    this.newFriend = null;
  }

  setFavorite(name: string) {
    this.favorite = name;
    let updateIndex = this.people.findIndex(x => x.name == name)
    this.people[updateIndex].isFavorite = !this.people[updateIndex].isFavorite;
  }


}

export type Friend = {
  name: string;
  isFavorite: boolean;
} 
