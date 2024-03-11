import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorite: string | null = null;

  peoples: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];
  favoritePeoples: string[] = [];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.peoples.push(this.newFriend);
    this.newFriend = null;
  }

  onFavoriteClicked(personName: string): void {
    if (!personName) {
      return;
    }

    if (!this.favoritePeoples.includes(personName)) {
      this.favoritePeoples.push(personName);
    } else {
      console.log('This person is already in he list');
    }
  }

  onRemoveClicked(personName: string): void {
    if (!personName) {
      return;
    }

    if (this.favoritePeoples.includes(personName)) {
      this.favoritePeoples = this.favoritePeoples.filter(
        (p) => p !== personName
      );
    }
  }
}
