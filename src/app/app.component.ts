import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorites: string[] = [];
  lastSelected: boolean = false;

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  setFavorite(favPerson: string): void {
    if (this.favorites.includes(favPerson)) {
      this.removeFavorite(favPerson);
    } else {
      this.favorites.push(favPerson);
    }
  }

  removeFavorite(person: string):void {
    const index = this.favorites.indexOf(person);
    if (index !== -1) {
      this.favorites.splice(index, 1);
    }
  }

}
