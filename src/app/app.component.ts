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

  addFavorite(person: string) {
    this.favorites.push(person);
  }

  deleteFavorite(person: string) {
    this.favorites = this.favorites.filter((favorite) => favorite !== person);
  }

  handleFavorite(event: { person: string }){
    if(this.favorites.includes(event.person)) {
      this.deleteFavorite(event.person);
    } else {
      this.addFavorite(event.person);
    }
  }

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }
}
