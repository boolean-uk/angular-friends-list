import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,
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

  addFav(friend: string): void {
    if (this.favorite.indexOf(friend) === -1){
      this.favorite.push(friend);
    }
  }

  removeFav(friend: string): void {
    this.favorite = this.favorite.filter((x) => x !== friend);
  }
}
