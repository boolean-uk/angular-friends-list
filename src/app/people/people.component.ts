import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input() people: string[] = [];
  @Output() setFavorite = new EventEmitter<string>();
  @Output() removeFavorite = new EventEmitter<string>();

  emitSetFavorite(person: string) {
    this.setFavorite.emit(person)
  }
  emitRemoveFavorite(person: string) {
    this.removeFavorite.emit(person);
  }

}
