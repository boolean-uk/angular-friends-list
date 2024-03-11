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

  setFavorite(person: string) {
    if (!person) {
      return;
    }
    this.favorite.push(person);
  }

  removeFavorite(person: string) {
    if (!person) {
      console.log("No person")
      return;
    }
    this.favorite = this.favorite.filter((p) => p !== person);
  }

}
