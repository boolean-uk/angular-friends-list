import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input() people: string[] = [];
  @Output() addToFavoriteEvent = new EventEmitter<string>();
  @Output() removeFromFavoriteEvent = new EventEmitter<string>();

  addToFavorite(person: string) {
    this.addToFavoriteEvent.emit(person)
  }

  removeFromFavorite(person: string) {
    this.removeFromFavoriteEvent.emit(person)
  }
}
