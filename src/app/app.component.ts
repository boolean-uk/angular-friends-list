import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favourite: string[] = []

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  setFavourites(fave: string) {
    if (!this.favourite.includes(fave)) {
      this.favourite.push(fave);
    }
  }

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  removeFavourite(name: string) {
    this.favourite = this.favourite.filter(item => item !== name)
  }
}
