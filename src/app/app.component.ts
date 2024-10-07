import { Component } from '@angular/core';
import { PeopleComponent } from './people/people.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newFriend: string | null = null;
  favouriteFriends: string[] = [];

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  setFavorite(person: string) {
    if (!this.favouriteFriends.includes(person)) {
      this.favouriteFriends.push(person);
    }
  }

  removeFavourite(person: string) {
    this.favouriteFriends = this.favouriteFriends.filter((friend) => friend !== person);
  }
}
