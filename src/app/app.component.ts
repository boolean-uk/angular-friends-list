import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleComponent } from './people/people.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:  [CommonModule, FormsModule, PeopleComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorites: string[] | null = [];

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  addToFavorites(n: string){
    if(this.favorites?.some(fav => fav === n)) {
      return;
    }
    this.favorites?.push(n);
  }

  removeFromFavorites(n: string) {
    if(!this.favorites?.some(fave => fave === n)){
      return
    }
    console.log(n)
    this.favorites.splice(this.favorites.indexOf(n), 1)
  }
}
