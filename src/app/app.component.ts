import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorites: string[] = [];


  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  addAppFav(p: string) : void {
    if (this.favorites.indexOf(p) === -1) {
      this.favorites.push(p)
    }
  }
  deleteAppFav(person: string) : void {
    this.favorites = this.favorites.filter((p) => p !== person)
  }
  isinFav(p: string) : boolean {
    if (this.favorites.indexOf(p) === -1) {
      return false;
    }
    return true;
  }
}
