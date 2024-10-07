import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrl: './people.component.css'
})
export class PeopleComponent {
  @Input('person') person: string = "";

  @Output() voted = new EventEmitter<string>();

  @Output() removed = new EventEmitter<string>();

  setAsFavorite() {
    this.voted.emit(this.person);
  }

  removeAsFavourite() {
    this.removed.emit(this.person);
  }

}
