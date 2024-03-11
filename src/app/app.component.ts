import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  favorite: string | null = null;

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];
  favorites: string[] = [];

  handleAddFriend(newFriend: string) {
    if (newFriend && !this.people.includes(newFriend)) {
      this.people.push(newFriend);
    } else {
      alert('Name already exists');
    }
  }
  setFavorite(friend: string) {
    this.favorite = friend;
    if (!this.favorites.includes(this.favorite)) {
      this.favorites.push(this.favorite);
      this.favorite = null;
    }
  }

  removeFavorite(favorite: string) {
    this.favorites = this.favorites.filter((f) => f !== favorite);
  }
}
