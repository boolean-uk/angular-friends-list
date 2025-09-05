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
    this.newFriend = null;
  }

  deleteFav(p: string): void {
    this.favorite = this.favorite.filter((pe) => pe !== p);
  }

  addFav(p: string): void {
    console.log(p);
    if (this.favorite.indexOf(p) === -1) {
      this.favorite.push(p);
    }
  }

  isInFav(p: string) {
    if (this.favorite.indexOf(p) === -1) {
      return false;
    }
    return true;
  }
}
