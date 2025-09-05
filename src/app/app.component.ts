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
  favs: string[] = [];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }
  deleteFriend(people: string): void {
    this.people = this.people.filter((p) => p !== people);
    this.deleteFav(people);
  }

  addFav(people: string): void {
    console.log(people);
    if (this.favs.indexOf(people) === -1) {
      this.favs.push(people);
    }
  }
  deleteFav(people: string): void {
    this.favs = this.favs.filter((p) => p !== people);
  }
  isinFav(people: string) {
    if (this.favs.indexOf(people) === -1) {
      return false;
    }
    return true;
  }
}
