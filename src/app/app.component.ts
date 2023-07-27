import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isFavorite: boolean = false;
  favorite: {name: string, isFavorite: boolean}[] = [];
  newFriend: {name: string, isFavorite: boolean}| null = null;

  people = [
    {name: 'lewis', isFavorite:false},
    {name: 'jules', isFavorite:false},
    {name: 'ed', isFavorite:false},
    {name: 'nathan', isFavorite:false},
    {name: 'dave', isFavorite:false},
    {name: 'nigel', isFavorite:false},
    ]

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  setFavourite(friend: {name: string, isFavorite: boolean}) {
    if(!this.favorite.includes(friend)) {
      this.favorite.push(friend)
      friend.isFavorite = true
    }
    else {
      this.favorite.splice(this.favorite.indexOf(friend), 1)
      friend.isFavorite = false
    }
  }
}
