import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent {
  @Input() name: string = '';
  @Input() favorites: string[] = [];

  addFavorite(friend: string) {
    this.favorites.push(friend);
  }
}
