import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newFriend: string | null = null;
  favorite: string | null = null;
  favouriteList: string[] = [];

  people: string[] = ['lewis', 'jules', 'ed', 'nathan', 'dave', 'nigel'];

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.people.push(this.newFriend);
    this.newFriend = null;
  }

  removeFriend(person: string) {
    this.favouriteList = this.favouriteList.filter(
      (favoritePerson) => favoritePerson !== person
    );
    if (this.favorite === person) {
      this.favorite = null;
    }
  }

  favouritise(person: string) {
    //Set person as favorite person
    this.favorite = person;

    //Add the favourite to the list
    if (this.favouriteList.includes(this.favorite)) {
      return;
    }
    this.favouriteList.push(this.favorite);
  }
}
