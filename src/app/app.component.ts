import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];
  favoritePeople: string[] = [];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  setFavorite(n: string) {
    if (this.favoritePeople.includes(n)){
      return;
    }
    this.favoritePeople.push(n);
    console.log(this.favoritePeople);
  }

  removeFavorites(n: string) {
    this.favoritePeople = this.favoritePeople.filter((people) => people !== n);
    console.log(this.favoritePeople);
  }
}
