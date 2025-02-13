import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favs: string[] = [];

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }
  addFav(person: string): void {
    console.log(person);
    if (this.favs.indexOf(person) === -1) {
      this.favs.push(person);
    }
  }
  deleteFav(person: string): void {
    this.favs = this.favs.filter((b) => b !== person);
  }
  isinFav(person: string) {
    if (this.favs.indexOf(person) === -1) {
      return false;
    }
    return true;
  }
}
