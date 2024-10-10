import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favourite: string = '';

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];
  favouritepeople: string[] = [];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  addToFavourites(favourite: string){
    if(!this.favouritepeople.includes(favourite)) this.favouritepeople.push(favourite)
    this.favouritepeople = [...this.favouritepeople] //don't understand why I need this to display the items?
  }

}
