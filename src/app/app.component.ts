import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorite: string[] = ['dave'];

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  setFavorite = (person: string): void => {
    if (this.favorite.includes(person)) {
      return;
    }
    this.favorite.push(person);
    console.log(this.favorite);
  };

  removeFavorite = (person: string): void => {
    this.favorite = [...this.favorite.filter((f) => f !== person)];
  };
}
