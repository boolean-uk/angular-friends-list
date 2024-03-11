import { Component } from '@angular/core';
import { PeopleComponent } from './people/people.component';

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

   addFavorite(person: string) {
        if (!this.favorites.includes(person)) {
            this.favorites.push(person);
        }
        console.log(this.favorites)
    };

  removeFavorite(person: string) {
    let index = this.favorites.indexOf(person);
        if (index > -1) {
            this.favorites.splice(index, 1);
        }
    };
    
}
