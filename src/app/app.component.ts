import { Component } from '@angular/core';
import { PeopleComponent } from './people/people.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorite: string | null = null;
  //I added
  lastFavoritePerson: string = ""

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  capitalise(person: string) {
    // game = game.toUpperCase()
    this.lastFavoritePerson = person
  }
}
