import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorite: string | null = null;

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];
  favoritePeople: string[] = [];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  setFavoritePerson(person: string) {
    if (this.favoritePeople.includes(person)) {
      this.favoritePeople.splice(this.favoritePeople.indexOf(person), 1);
    }
    else  {
      this.favoritePeople.push(person)
    }
  }
}
