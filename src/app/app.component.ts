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
  changeFavorite(n: string){
    if ( this.favorites.includes(n))
      return;
    this.favorites.push(n);
  }
  removeFavorite(n: string){
    this.favorites = this.favorites.filter(f => f != n);
  }
}
