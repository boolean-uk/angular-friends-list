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
  buttonText: string[] = ['Add to Favorite', 'Remove from Favorite'];

  setButtonText(person: string) {
    if (this.favorite.includes(person)) return this.buttonText[1];
    return this.buttonText[0];
  }

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  setFavorite(person: string) {
    if (this.favorite.includes(person)) {
      this.favorite.splice(this.favorite.indexOf(person), 1);
      return;
    }
    this.favorite.push(person);
  }

  isFavorite(person: string) {
    return this.favorite.includes(person)
      ? 'Remove from Favorite'
      : 'Set as Favorite';
  }
}
