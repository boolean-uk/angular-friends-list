import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input() name: string = "";
  @Output() addToFavoriteEvent = new EventEmitter<string>();
  @Output() removeFromFavoriteEvent = new EventEmitter<string>();

  addFavorite() {
    this.addToFavoriteEvent.emit(this.name);
  }

  removeFavorite() {
    this.removeFromFavoriteEvent.emit(this.name);
  }
}
