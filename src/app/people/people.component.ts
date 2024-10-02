import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input() favorites: string[] = [];
  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];
  newFriend: string | null = null;

  constructor() { }

  addFriend() {
    if (this.newFriend) {
      this.people.push(this.newFriend);
      this.newFriend = null;
    }
  }

  addFavorite(person: string) {
    if (this.favorites.indexOf(person) === -1) {
      this.favorites.push(person);
    }
  }

  removeFavorite(person: string) {
    const index = this.favorites.indexOf(person);
    if (index !== -1) {
      this.favorites.splice(index, 1);
    }
  }
}
