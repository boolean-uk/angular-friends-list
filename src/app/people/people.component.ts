import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent {
  @Input() people!: string[];
  @Output() setFav = new EventEmitter<string>();
  selectPerson(person: string): void {
    this.setFav.emit(person);
  }
}
