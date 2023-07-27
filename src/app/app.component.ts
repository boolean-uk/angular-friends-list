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
    console.log(this.newFriend);
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  becomeFav(friend: string) {
    if (!friend) {
      return;
    }
    if (!this.favorite.includes(friend)) {
      const index = this.people.indexOf(friend);
      this.people.splice(index, 1);
    }
    this.favorite.push(friend);
    console.log(this.favorite);
  }

  deleteFav(friend: string) {
    console.log(friend);
    if (!friend) {
      return;
    }

    const index = this.favorite.indexOf(friend);
    this.favorite.splice(index, 1);
    this.people.push(friend);
  }
}
