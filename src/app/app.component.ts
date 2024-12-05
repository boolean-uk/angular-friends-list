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

  toggleFavorite(friend: string) { 
      this.favorite.push(friend)
      
  }

  removeFavorite(friend: string) {
    const index = this.favorite.indexOf(friend);
    if (index !== -1) {
      this.favorite.splice(index, 1)
    }
  }

  capitalise(friends: string[]) {
    // game = game.toUpperCase();
     this.favorite
      = friends.slice();
   }

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }


}
