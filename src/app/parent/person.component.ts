import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent {
    @Input() person: string = "Unknown";
    @Output() favouritePerson: EventEmitter<string> = new EventEmitter<string>()

    personFavourite(person: string) {
      this.favouritePerson.emit(person)
    }
}
