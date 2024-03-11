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

  addFavourite(name: string) {
    if(this.favorite.find(p => p === name)) {
      return;
    }
    this.favorite.push(name);
    console.log(this.favorite)
  }

  removeFavourite(name: string) {
    this.favorite = this.favorite.filter(p => p !== name)
    console.log(this.favorite)
  }

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }
}
