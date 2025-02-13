import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;

  favorites: string[] = ["test"];
  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend(): void {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  addFav(p: string): void{
    if (!this.favorites.includes(p)) {
      this.favorites.push(p);
    }
  }

  removeFav(p: string): void {
    this.favorites = this.favorites.filter(fav => fav !== p);
  }

  isInFav(name: string) {
    if (this.favorites.indexOf(name) === -1) {
      return false;
    }
    return true;
  }
}
