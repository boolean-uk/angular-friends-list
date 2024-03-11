import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input("people") people?: string;
  @Output("favoriteClick") favouriteClick = new EventEmitter<string>();

  onFavoriteClick() {
    this.favouriteClick.emit(this.people);
  }

}


