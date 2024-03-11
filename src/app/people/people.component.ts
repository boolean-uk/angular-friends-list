import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input() person: string = "";
  @Output() addPersonToFavorite: EventEmitter<string> = new EventEmitter<string>();

  favoritePerson(n: string) {
    console.log(n)
    this.addPersonToFavorite.emit(n)
  }
}
