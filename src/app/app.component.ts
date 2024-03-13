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
  setFavorite(person: string) {
    if (!this.favorite.includes(person)) {
      this.favorite.push(person);
      console.log('added,', person);
    }
  }

  removePerson(person: string) {
    if (this.favorite.includes(person)) {
      const num: number = this.favorite.indexOf(person);
      this.favorite.splice(num, 1);
      console.log('removed,', person);
    }
  }
}
