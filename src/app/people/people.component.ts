import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent {
  @Input('friend') friend: string | null = null;
  @Output('addToFavourites') addToFavourites = new EventEmitter();

  clicked() {
    this.addToFavourites.emit(this.friend);
  }
}
