import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent {
  @Input() people: string[] = [];
  @Output() favoriteSelected = new EventEmitter<string>();

  setFavorite(person: string) {
    this.favoriteSelected.emit(person);
  }
}
