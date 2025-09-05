import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favs: string[] = [];

  people: string[] = ['Nigel', 'Lewis', 'Jules', 'Ed', 'Nathan', 'Dave'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }
    setFav(people: string): void {
    console.log(people);
    if (this.favs.indexOf(people) === -1) {
      this.favs.push(people);
    }
  }

  deleteFav(people: string): void {
    this.favs = this.favs.filter((p) => p !== people);
  }
  isFav(people: string) {
    if (this.favs.indexOf(people) === -1) {
      return false;
    }
    return true;
  }
  
}
