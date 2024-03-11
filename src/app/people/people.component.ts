import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input() person: string | null = null;
  @Output() favoritePerson: EventEmitter<string> = new EventEmitter<string>();

  setFavorite(n: string) {
    this.favoritePerson.emit(n);
  }
}
