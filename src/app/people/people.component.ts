import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input() person!: string | null
  @Output() favouritePerson: EventEmitter<string> = new EventEmitter<string>()

  personFavourite(person: string) {
    this.favouritePerson.emit(person)
  }
}
