import { Component, Input } from '@angular/core';
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

  addToFavourites(person: string){
    if(!this.favorites.includes(person)){
      this.favorites.push(person)
    }
  }

  removeFromFavourites(person: string){
    const personToRemove = this.favorites.indexOf(person)
    console.log(personToRemove)
    this.favorites.splice(personToRemove, 1)
  }

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }
}
