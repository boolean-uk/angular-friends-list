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

  addFavorite(person: string) {
    if (!this.favorite.includes(person)) {
      this.favorite.push(person);
    }
  }

  removeFavorite(person: string) {
    const index = this.favorite.indexOf(person);
    if (index !== -1) {
      this.favorite.splice(index, 1);
    }
  }

  handleFavoriteChange(event: { person: string; isFavorite: boolean }) {
    if (event.isFavorite) {
      this.addFavorite(event.person);
    } else {
      this.removeFavorite(event.person);
    }
    console.log('Favorite friends:', this.favorite);
  }
}
