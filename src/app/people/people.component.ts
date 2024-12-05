import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent {
  @Input('friend') friend: string | null = null;
  @Output('addToFavourites') addToFavourites = new EventEmitter();
  @Output('removeFromFavourites') removeFromFavourites = new EventEmitter();

  add() {
    this.addToFavourites.emit(this.friend);
  }

  remove() {
    this.removeFromFavourites.emit(this.friend);
  }
}
