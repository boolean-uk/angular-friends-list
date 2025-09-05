import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-friends-list';
  people: string[] = ['Lewis', 'Jules', 'Ed', 'Nathan', 'Dave', 'Nigel'];
  favs: string[] = [];
  newFriend: string | null = null;

  addFriend() {
    if (!this.newFriend) return;
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  addToFav(name: string): void {
    console.log(name);
    if (this.favs.indexOf(name) === -1) {
      this.favs.push(name);
    }
  }

  deleteFav(name: string): void {
    this.favs = this.favs.filter(f => f !== name);
  }

  isinFav(name: string) {
    if (this.favs.indexOf(name) === -1) {
      return false;
    }
    return true;
  }
}
