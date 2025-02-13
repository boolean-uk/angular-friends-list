import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorite: string[] = [];

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  lastVoted: boolean = false;

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  setFavourite(name: string): void {
    if (!this.favorite.includes(name)) { // ✅ This now works because favorite is always an array
      this.favorite.push(name);
    }
  }

  removeFavourite(name: string): void {
    this.favorite = this.favorite.filter(fav => fav !== name);
  }
  
}
