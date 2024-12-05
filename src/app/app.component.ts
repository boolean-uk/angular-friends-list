import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorite: string[] | null = [];

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  addFavorite(favorite: string) {
    if (this.favorite?.indexOf(favorite) !== -1) {
      console.log(`Already in favorites.`);
      return;
    }
    console.log(`Added ${favorite} to favorites.`);
    this.favorite?.push(favorite);
    console.log(this.favorite);
  }

  removeFavorite(favorite: string) {
    const index = this.favorite?.indexOf(favorite);
    if (index === -1) {
      console.log('Not in favorites');
      return
    }
    console.log(`Removed ${favorite} from favorites.`);
    this.favorite?.splice(this.favorite.indexOf(favorite), 1);
    console.log(this.favorite);
  }

  capitalize(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }
}
