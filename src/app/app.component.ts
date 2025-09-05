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

  addFav(person: string): void {
    if (!this.favorites.find((p) => p === person )){
      this.favorites.push(person);
    }
  }

  removeFav(person: string): void {
    this.favorites = this.favorites.filter((p) => p !== person);
  }

  isInFav(person: string): boolean {
    if (this.favorites.indexOf(person) === -1) {
      return false;
    }
    return true;
  }
 
}
