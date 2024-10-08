import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorite: string | null = null;
  
  favorites: string[] = [];
  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  setFavourite(friendName: string) {
    if (this.favorites.includes(friendName)) {
      return;
    }
    this.favorites.push(friendName)    
  }

  remove(friendName: string) {
    let index = this.favorites.indexOf(friendName)
    this.favorites.splice(index, 1)

    console.log(this.favorites);
    
  }
}
