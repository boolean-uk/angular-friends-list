import { Component, OnInit } from '@angular/core';
import { DataService, Person } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  newFriend: string | null = null;
  favorites: Person[] = [];
  people: Person[] = [];
  showFriendAddedAlert: boolean = false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getPeople().subscribe((people) => {
      this.people = people;
    });

    this.dataService.getFavorites().subscribe((favorites) => {
      this.favorites = favorites;
    });
  }

  addFriend() {
    if (!this.newFriend) {
      return;
    }
    this.dataService.addPerson(this.newFriend).subscribe((person) => {
      this.people.push(person);
      this.newFriend = null;
    });
  }

  removeFriend(person: Person) {
    console.log(person);
    this.dataService.removePerson(person.id).subscribe(() => {
      this.people = this.people.filter((item: Person) => item !== person);
    });
  }

  selectFavorite(person: Person) {
    if (this.favorites.some((favorite) => favorite.name === person.name)) {
      this.showFriendAddedAlert = true;
      setTimeout(() => (this.showFriendAddedAlert = false), 3000);
      return;
    }

    this.dataService.addFavorite(person.name).subscribe((favorite) => {
      this.favorites.push(favorite);
    });
  }

  removeFavorite(favorite: Person) {
    this.dataService.removeFavorite(favorite.id).subscribe(() => {
      this.favorites = this.favorites.filter(
        (item: Person) => item !== favorite
      );
    });
  }
}
