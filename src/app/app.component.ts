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

  setFav(name: string) {
    this.favorites.push(name)
  }

  unFav(name: string) {
    for(let i = 0; i < this.favorites.length; i++) {
      if(this.favorites[i] === name) {
        this.favorites.splice(i,1);
      }
    }

  }
}
