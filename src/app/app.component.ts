import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorite: string | null = null;
  favoriteList: string[] = [] 

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  setFavorite(person: string) {
    this.favorite = person
  }

  addFavorites(person: string) {
    if (!this.favoriteList.includes(person)) {
      this.favoriteList.push(person)
    }
  }

  removeFavorites(person: string) {
    const index = this.favoriteList.indexOf(person)
    if (index !== -1) {
      this.favoriteList.splice(index, 1)
    }
  }
}
