import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorite: string[] = [];
  isFavorite: boolean = false;

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  setFavourite(friend: string) {
    if(!this.favorite.includes(friend)) {
      this.favorite.push(friend)
      this.isFavorite = true
    }
    else
      this.favorite.splice(this.favorite.indexOf(friend), 1)
  }
}
