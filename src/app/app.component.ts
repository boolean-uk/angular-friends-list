import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favourite: string | null = null;

  lastVoted: boolean = false;

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  setFavourite(person: string) {
    this.favourite = person;
  }

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }
}
