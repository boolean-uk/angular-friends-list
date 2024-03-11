import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorite: string[] = [];
  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    console.log(this.people);
    this.newFriend = null;
  }
  setFavourite(person: string) {
    if (!this.favorite.includes(person)) {
      this.favorite?.push(person);
    }
  }
  unsetFavourite(person: string) {
    if (this.favorite.includes(person)) {
      const index = this.favorite.indexOf(person);
      this.favorite.splice(index, 1);
    }
  }
}
