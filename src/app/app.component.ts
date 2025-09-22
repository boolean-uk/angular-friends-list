import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favourites : string[] = [];
  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFavourite(favourite : string) {
    if (this.favourites.indexOf(favourite) === -1) {
      this.favourites.push(favourite);
    }
  }

  removeFavourite(favourite : string) {
    const index = this.favourites.indexOf(favourite);
    if (index > -1) {
      this.favourites.splice(index, 1);
    }
  }

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }
}
