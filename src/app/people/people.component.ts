import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input("friend") friend = "Neomi";
  @Output("favorite") favorite = new EventEmitter<string>();

  setFavorite(): void {
    this.favorite.emit(this.friend)

  }
}
