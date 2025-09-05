import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input() name!: string;
  @Output() favourite = new EventEmitter<string>();
  @Output() removeFavourite = new EventEmitter<string>();

  setFavourite() {
    this.favourite.emit(this.name);
  }

  removeFavouriteClick() {
    this.removeFavourite.emit(this.name);
  }
}