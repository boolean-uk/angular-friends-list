import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent {
  @Input('person') person: string | null = null;
  @Output('addToFavourite') addToFavourite = new EventEmitter();
  @Output('removeFromFavourites') removeFromFavourites = new EventEmitter();

  clickedFavourite() {
    this.addToFavourite.emit(this.person);
  }

  clickedRemove() {
    this.removeFromFavourites.emit(this.person);
  }
}
