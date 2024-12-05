import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorites: string[] = [];
  people: string[] = ['Lewis', 'Jules', 'Ed', 'Nathan', 'Dave', 'Nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  addFriendByName(personName: string) {
    this.people.push(personName);
  }

  removeFriend(personName: string) {
    const index = this.people.indexOf(personName);
    if (index !== -1) {
      this.people.splice(index, 1);
      const favoriteIndex = this.favorites.indexOf(personName);
      if (favoriteIndex !== -1) {
        this.favorites.splice(favoriteIndex, 1);
      }
    }
  }
  
  toggleFavorite(personName: string) {
    const index = this.favorites.indexOf(personName);
    if (index !== -1) {
      this.favorites.splice(index, 1); // Remove from favorites
    } else {
      this.favorites.push(personName); // Add to favorites
    }
  }

  removeFavorite(personName: string) {
    const index = this.favorites.indexOf(personName);
    if (index !== -1) {
      this.favorites.splice(index, 1); // Remove from favorites
    }
  }
}
