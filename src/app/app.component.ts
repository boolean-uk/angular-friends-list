import { Component } from '@angular/core';
// import { PeopleComponent } from './people/people.component'; 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // standalone: true,
  // imports: [PeopleComponent],
})
export class AppComponent {
  newFriend: string | null = null;
  favorites: string[] =  [ ];

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }
  addFavorite(favorite: string) {
    if(!this.favorites.includes(favorite)) {
      this.favorites.push(favorite);
      // this.favorites.set([...current, name]);
    }
  }
  remove(favorite: string) {
    this.favorites = this.favorites.filter(fav => fav !== favorite);
  }
}
