import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent {
  @Input('people') people?: string;
  @Output('favouriteClick') favouriteClick = new EventEmitter<string>();

  onFavouriteClick() {
    this.favouriteClick.emit(this.people);
  }
}
