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

  favoriteFriend(name: string) {
    if (!this.favorites.includes(name)) this.favorites.push(name);
  }

  unfavoriteFriend(name: string) {
    if(this.favorites.includes(name)) this.favorites.splice(this.favorites.indexOf(name, 0), 1);
  }

  deleteFriend(name: string) {
    if(this.people.includes(name)) this.people.splice(this.people.indexOf(name, 0), 1);
    if(this.favorites.includes(name)) this.favorites.splice(this.favorites.indexOf(name, 0), 1);
  }
 
}
