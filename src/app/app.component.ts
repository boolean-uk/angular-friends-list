import { Component } from '@angular/core';
import { PeopleComponentComponent } from './people.component/people.component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorite: string[] = [];

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  loadFriends() {
    this.people.forEach(person => {
      const peopleComponent = new PeopleComponentComponent();
      peopleComponent.setName(person);
    });
  }

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }
  setFavorite(person: string) {
    if (!this.favorite.includes(person)){
      this.favorite.push(person);
    }
  }
  setNotFavorite(person: string) {
    this.favorite = this.favorite.filter(p => p !== person);
  }
}

