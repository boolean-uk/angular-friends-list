import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  newFriend: string | null = null;
  favorite: string[] = [];

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  addToFavorite(people: string) {
    if(!this.favorite.includes(people))
      this.favorite.push(people);
  }

  removeFromFavorite(people: string) {
    if(this.favorite.includes(people))
      this.favorite.splice(this.favorite.indexOf(people), 1)
  }

  getFavorites(){
    return this.favorite.join(", ")
  }
}

