import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
})

export class PeopleComponent {
  @Input() person: string | undefined;
  @Output() favoriteAdded = new EventEmitter<string>();
  @Output() favoriteRemoved = new EventEmitter<string>();

  constructor() { }

  selectAsFavorite() {
    this.favoriteAdded.emit(this.person);
  }

  removeAsFavorite() {
    this.favoriteRemoved.emit(this.person);
  }

  get isFavorite(): boolean {
    return false; 
  }
}
