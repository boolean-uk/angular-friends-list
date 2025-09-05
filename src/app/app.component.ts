import { Component, model } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorite: string | null = null;

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  favorites: string[] = []

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  setFavourite(fave: string) {
    this.favorite = fave; 
    this.favorites.push(fave)
  }

  removeFriend(friend: string) {
    const index: number = this.people.indexOf(friend)
    this.people.splice(index, 1)
    const indexFavorites:number = this.favorites.indexOf(friend)
    this.favorites.splice(indexFavorites, 1)
  }

  /*
    removeFriend() {
     if (!this.people.some((x)=> x === this.remove)) {
      this.people = this.people.filter(p => p != this.remove)
    }
  }*/ 
}
