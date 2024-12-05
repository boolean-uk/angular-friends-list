import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Friend } from '../app.component';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input("friend") friend: Friend = { name: "Neomi", isFavorite: true };
  @Output("favorite") favorite = new EventEmitter<string>();

  setFavorite(): void {
    this.favorite.emit(this.friend.name)

  }
}
