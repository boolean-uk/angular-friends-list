import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  @Output() public newFavourite = new EventEmitter<string>();
  @Output() public unFavourite = new EventEmitter<string>();
  @Input("people") people: string[] = [];
  @Input("favourites") favourites: string[] = [];

  favouritePressed(person: string) {
    if (this.favourites.indexOf(person) < 0) {
      this.newFavourite.emit(person);
    }
    else {
      this.unFavourite.emit(person);
    }
  }
}
