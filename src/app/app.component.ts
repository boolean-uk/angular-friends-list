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
    if (this.newFriend) {
      this.people.push(this.newFriend);
      this.newFriend = null;
    }
  }

  setFavorite(friend: string) {
    if (!this.favorite.includes(friend)) {
      this.favorite.push(friend);
    }
  }

  removeFavorite(friend: string) {
    this.favorite = this.favorite.filter((f) => f !== friend);
  }
}
