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

  onMarkAsFavorite(name: string) {
    const index = this.favorite.indexOf(name);

    if (index !== -1) {
      this.favorite.splice(index, 1);
      return;
    }

    this.favorite.push(name);
  }

  get favourites() {
    return this.favorite.join(", ")
  }
}
