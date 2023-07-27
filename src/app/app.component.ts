import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  newFriend: string | null = null;
  favorites: string[] = [];
  people: string[] = [];

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
    this.dataService.addPerson(this.newFriend as string).subscribe(() => {
      this.people.push(this.newFriend as string);
      this.newFriend = null;
    });
  }

  selectFavorite(name: string) {
    this.dataService.addFavorite(name).subscribe(() => {
      this.favorites.push(name);
    });
  }

  removeFavorite(person: string) {
    this.dataService.removeFavorite(person).subscribe(() => {
      this.favorites = this.favorites.filter((item: string) => item !== person);
    });
  }
}
