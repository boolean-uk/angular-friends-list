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

  addFavorite(person: string): void {
    if (!this.favorites.includes(person)) this.favorites?.push(person);
  }
  removeFavorite(person: string): void {
    //   if (this.favorites.includes(person))
    //     this.favorites = this.favorites?.filter((f) => f != person);
    // }
    const index = this.favorites.indexOf(person);
    if (index !== -1) {
      this.favorites.splice(index, 1);
    }
  }
}
