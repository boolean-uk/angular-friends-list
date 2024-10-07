import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorite: string[] | null = [];

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  handleFavorite(fav: string) {
    let index: number = this.favorite?.indexOf(fav) ?? 0;
    if (this.favorite?.includes(fav)) {
      this.favorite.splice(index, 1);
    } else {
      this.favorite?.push(fav);
    }
  }
}
