import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favourites: string[] = [];

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  editFavorites(favourite: string) {
    if(! this.favourites.includes(favourite)){
      this.favourites.push(favourite);
    }
    else{
      const i : number = this.favourites.indexOf(favourite);
      this.favourites.splice(i, 1);
    }
  }
}
