import {Component} from '@angular/core';
import Person, {createPerson} from "../types/Person";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriendName: string | null = null
  favorites: Person[] = [];
  people: Person[] = [];

  addFriend() {
    if (!this.newFriendName) {
      return;
    }
    const newFriend = createPerson(this.newFriendName)
    this.people.push(newFriend);
    this.newFriendName = null;
  }

  addFavorite(person: Person) {
    person.isFav = true
    this.favorites.push(person)
  }

  removeFavorite(person: Person) {
    person.isFav = false;
    const idx = this.favorites.indexOf(person);
    if (idx === -1) return;
    this.favorites.splice(idx, 1);
  }
}
