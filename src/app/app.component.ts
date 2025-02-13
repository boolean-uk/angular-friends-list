import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favoritePeople: string[] = [];

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  setFavorite(person: string) {
    this.favoritePeople.push(person);
  }

  removeFavorite(person: string) {
    let index: number = this.favoritePeople.findIndex(p => p == person);
    this.favoritePeople.splice(index, 1);
  }
}
