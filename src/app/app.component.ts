import { Component } from '@angular/core';
import { PeopleComponent } from './people/people.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorites: string[]  = [];

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }
  friend_toggleFavorite(friend:PeopleComponent)
  {
    console.log(friend)
    console.log(this.favorites.indexOf(friend.name))
    console.log("found?"+this.favorites.indexOf(friend.name))
    if(this.favorites.indexOf(friend.name) === -1) 
    {
      this.favorites.push(friend.name);
      console.log(this.favorites);
    }
    else 
    {
      this.favorites = [...this.favorites.filter(x=>x!==friend.name) ]
      console.log(this.favorites);
    }
  }
}
