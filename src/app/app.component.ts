import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  removed: string | null = null;
  favourite: string | null = null;

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  setFavourite(fave: string) {
    this.favourite = fave;
  }

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  removeFriend() {
    if (!this.removed) {
      return;
    }
    if (this.people.some(x => x === this.removed)) {
      this.people = this.people.filter(p => p != this.removed);
      console.log(this.people);
    }
    return;
  }
}
