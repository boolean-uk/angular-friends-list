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
    } else if (!this.people.includes(this.newFriend)) {
      this.people.push(this.newFriend);
    }
    
    this.newFriend = null;
  }

  removeFriend(name: string) {
    if (this.people.includes(name)) {
      this.people.splice(this.people.indexOf(name), 1);

      if (this.favorites.includes(name)) {
        this.removeFavorite(name)
      }
    }
  }

  addFavorite(name: string) {
    if (!this.favorites.includes(name)) {
      this.favorites.push(name)
    }
    
    return;
  }

  removeFavorite(name: string) {
    if (this.favorites.includes(name)) {
      this.favorites.splice(this.favorites.indexOf(name), 1);
    }

    return;
  }
}
