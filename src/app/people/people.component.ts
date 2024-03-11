import { Component, EventEmitter, Input, Output } from '@angular/core';
import capitalizeName from '../utils/stringUtils';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input() person: string = "";
  @Output() addPersonToFavorite: EventEmitter<string> = new EventEmitter<string>();

  favoritePerson(n: string) {
    this.addPersonToFavorite.emit(n)
  }

  capitalizeName = capitalizeName
}
