import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorites: string[] = []

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  setFavourite(fave: string) : void  {
    console.log(fave)
    this.favorites?.push(fave)
    console.log(this.favorites)
  }
  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }
}
