import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent {
  @Input() peopleData: string[] = [];
  @Input() setFavorite: (person: string) => void;
  @Input() removeFavorite: (person: string) => void;

  handleClick(person: string) {
    this.setFavorite(person);
  }

  handleRemove(person: string) {
    this.removeFavorite(person);
  }
}
