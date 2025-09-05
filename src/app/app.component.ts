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

  setFavorites(fav: string){
    if (!this.favorites.includes(fav)){
      this.favorites.push(fav + ',')
    }
  }
  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  removeFavorite(person: string) {
    this.favorites = this.favorites.filter(curr => curr !== person+',')
  }
}
