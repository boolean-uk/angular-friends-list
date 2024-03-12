import { Component } from '@angular/core';
import { PeopleComponent } from './people/people.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  // favorite: string | null = null;
  //I added
  lastFavoritePerson: string[] = []

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  toggleFavorite(person: string) {
    const index = this.lastFavoritePerson.indexOf(person);
    if (index !== -1) {
      this.lastFavoritePerson.splice(index, 1);
    } else {
      this.lastFavoritePerson.push(person);
    }
  }
}
