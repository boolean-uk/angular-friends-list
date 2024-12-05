import { Component } from '@angular/core';
import { PeopleComponent } from './people/people.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorite: string[] = [];

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  setFavorite(n: string){
    if (n !== null && !this.favorite.includes(n))
    this.favorite.push(n);
  }

  removeFavorite(n: string){
    const index = this.favorite.indexOf(n)

    if (index !== -1){
      this.favorite.splice(index, 1)
    }
  }
}
