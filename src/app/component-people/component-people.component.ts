import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component-people',
  templateUrl: './component-people.component.html',
  styleUrls: ['./component-people.component.css'],
})
export class ComponentPeopleComponent {
  @Input() name: string = '';
  @Input() isFav: boolean = false;

  @Output() addFav = new EventEmitter<string>();
  @Output() deleteFav = new EventEmitter<string>();

  // These methods will actually emit the events
  addToFavs(friend: string): void {
    this.addFav.emit(friend);
  }

  deleteFromFavs(friend: string): void {
    this.deleteFav.emit(friend);
  }
}
