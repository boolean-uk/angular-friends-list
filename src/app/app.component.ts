import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorites: string[] = []
  isFavorite: boolean = false;
  peoples: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.peoples.push(this.newFriend);
    this.newFriend = null;
  }

  setFavorite(name: string) {
    this.favorites.push(name);
  }

  removeFavorite(nameToDelete: string) {
    this.favorites = this.favorites.filter(name => name !== nameToDelete);
}

}
