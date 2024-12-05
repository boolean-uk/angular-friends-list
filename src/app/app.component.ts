import { Component, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorite: string[] = [];

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFavorite(name: string){
    if (!this.favorite.includes(name)) this.favorite.push(name)
  }

  removeFavorite(name: string){
    const index = this.favorite.indexOf(name)
    this.favorite.splice(index,1)
  }

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }
}
