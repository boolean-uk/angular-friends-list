import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input() person: string = ''
  @Input() favourites: string[] = []
  @Output() favouriteChecked: EventEmitter<string> = new EventEmitter()
  @Output() favouriteRemoved: EventEmitter<string> = new EventEmitter()
  isFavourite: boolean = false;

  clickedAddFavourite() {
    this.favouriteChecked.emit(this.person);
    this.isFavourite = true;
  }

  clickedRemoveFavourite() {
    this.favouriteRemoved.emit(this.person);
    this.isFavourite = false;
  }
}
