import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorite: string[] = []

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  makeFavorite(friendName: string): void {
    this.favorite.push(friendName)
  }

  removeFavorite(friendName: string): void {
    const friend = this.favorite.find((person) => person === friendName)
    if (friend)
    {
      const index = this.favorite.indexOf(friend)
      this.favorite.splice(index, 1)
    }
  }
}